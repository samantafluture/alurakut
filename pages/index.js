import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
import FriendsList from "../src/components/FriendsList";
import CommunitiesList from "../src/components/CommunitiesList";
import CommunityForm from "../src/components/ComunityForm";
import GitHubService from "../src/api/api";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home() {
  const [username, setUsername] = useState([]);
  const [comunidades, setComunidades] = useState([
    {
      id: "20210716",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
    {
      id: "20210308",
      title: "Discografias",
      image: "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-discografias.png?raw=true",
    },
  ]);

  useEffect(() => {
    GitHubService.getUsername().then((userName) => setUsername(userName));
  }, []);

  return (
    <>
      <AlurakutMenu username={username.login} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar username={username.login} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vindo(a), {username.login}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <CommunityForm comunidades={comunidades} setComunidades={setComunidades} />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <CommunitiesList comunidades={comunidades} />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

console.log("olá");
