import React, { useEffect, useState } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import { ProfileRelationsBoxWrapper } from "../src/components/RelationsSidebar";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
import ProfileBio from "../src/components/ProfileBio";
import FriendsList from "../src/components/FriendsList";
import CommunitiesList from "../src/components/CommunitiesList";
import ScrapsList from "../src/components/ScrapsList";
import CommunityForm from "../src/components/ComunityForm";
import ScrapForm from "../src/components/ScrapForm";
import { ScrapsBox } from "../src/components/ScrapsBox";
import GitHubService from "../src/api/githubService";
import DatoCMSService from "../src/api/datocmsService";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home(props) {
  const githubUser = props.githubUser;
  const [username, setUsername] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    GitHubService.getUsername(githubUser).then((name) => setUsername(name));

    GitHubService.getFollowers(githubUser).then((followersList) =>
      setFollowers(followersList)
    );

    DatoCMSService.getCommunities().then((respostaCompleta) => {
      const allCommunities = respostaCompleta.data.allCommunities;
      setComunidades(allCommunities);
    });

    DatoCMSService.getScraps().then((respostaCompleta) => {
      const allScraps = respostaCompleta.data.allScraps;
      setScraps(allScraps);
    });
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <ProfileBio
              boxTitle={`Bem-vindx, ${username.name}`}
              bio={username.bio}
              local={username.location}
            />
            <OrkutNostalgicIconSet
              recados={scraps.length}
              fotos="45"
              videos="2"
              fas="1"
              mensagens="7"
              confiavel="3"
              legal="3"
              sexy="3"
            />
          </Box>
          <Box>
            <h2 className="subTitle">Adicionar uma comunidade</h2>
            <CommunityForm
              comunidades={comunidades}
              setComunidades={setComunidades}
            />
          </Box>
          <Box>
            <h2 className="subTitle">Deixar um recado</h2>
            <ScrapForm scraps={scraps} setScraps={setScraps} />
          </Box>
          <ScrapsBox>
            <ScrapsList
              boxTitle={"Recados"}
              scraps={scraps}
              name={username.login}
              image={username.avatar_url}
              url={username.html_url}
            />
          </ScrapsBox>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <FriendsList
              boxTitle={"Amigos"}
              followers={followers}
            />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <CommunitiesList
              boxTitle={"Comunidades"}
              comunidades={comunidades}
            />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
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
