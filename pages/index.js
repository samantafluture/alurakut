import React, { useEffect, useState } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";

import GitHubService from "../src/api/githubService";
import DatoCMSService from "../src/api/datocmsService";

import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import BoxLink from "../src/components/BoxLink";
import ProfileSidebar from "../src/components/ProfileSidebar";
import ProfileBio from "../src/components/ProfileBio";
import FriendsList from "../src/components/FriendsList";
import CommunitiesList from "../src/components/CommunitiesList";
import CommunityForm from "../src/components/ComunityForm";
import ScrapForm from "../src/components/ScrapForm";
import ScrapsBox from "../src/components/ScrapsBox";
import ScrapsList from "../src/components/ScrapsList";

import { ProfileRelationsBoxWrapper } from "../src/components/RelationsSidebar";
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
  const filteredFollowers = followers.slice(0, 6);

  useEffect(() => {
    GitHubService.getUsername(githubUser).then((data) => {
      const loggedUsername = data;
      setUsername(loggedUsername);
    });

    GitHubService.getFollowers(githubUser).then((data) => {
      const allFollowers = data;
      setFollowers(allFollowers);
    });

    DatoCMSService.getCommunities().then((data) => {
      const allCommunities = data.data.allCommunities;
      setComunidades(allCommunities);
    });

    DatoCMSService.getScraps().then((data) => {
      const allScraps = data.data.allScraps;
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
              amigos={followers.length}
              comunidades={comunidades.length}
              confiavel="3"
              legal="3"
              sexy="3"
            />
          </Box>
          <Box>
            <CommunityForm
              boxTitle={"Adicionar uma comunidade"}
              comunidades={comunidades}
              setComunidades={setComunidades}
            />
          </Box>
          <Box>
            <ScrapForm
              boxTitle={"Deixar um recado"}
              scraps={scraps}
              setScraps={setScraps}
            />
          </Box>
          <ScrapsBox>
            <ScrapsList
              boxTitle={"Recados"}
              scraps={scraps}
              name={username.login}
              image={username.avatar_url}
            />
            <BoxLink url={`/recados`} linkTitlte={"Ver todos"} />
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
              filteredFollowers={filteredFollowers}
            />
            <BoxLink url={`/amigos`} linkTitlte={"Ver todos"} />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <CommunitiesList
              boxTitle={"Comunidades"}
              comunidades={comunidades}
            />
            <BoxLink url={`/comunidades`} linkTitlte={"Ver todos"} />
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
