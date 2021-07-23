import React, { useEffect, useState } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import PageGrid from "../src/components/PageGrid";
import ProfileSidebar from "../src/components/ProfileSidebar";
import FriendsList from "../src/components/FriendsList";
import { ProfileRelationsBoxWrapper } from "../src/components/RelationsSidebar";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";
import GitHubService from "../src/api/githubService";

export default function AmigosPage(props) {
  const githubUser = props.githubUser;
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    GitHubService.getFollowers(githubUser).then((followersList) =>
      setFollowers(followersList)
    );
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <PageGrid>
        <ProfileSidebar githubUser={githubUser} />
        <ProfileRelationsBoxWrapper>
          <FriendsList
            boxTitle={"Amigos"}
            followers={followers}
            filteredFollowers={followers}
          />
        </ProfileRelationsBoxWrapper>
      </PageGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const { isAuthenticated } = await fetch(
    "https://alurakut.vercel.app/api/auth",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((resposta) => resposta.json());

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);

  return {
    props: {
      githubUser: githubUser,
    },
  };
}
