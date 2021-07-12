import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
import FriendsList from "../src/components/FriendsList";
import GitHubService from "../src/api/api";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home() {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    GitHubService.getUsername().then((userName) => setUsername(userName));
  }, []);

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar username={username.login} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vindo(a), {username.login}</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="smallTitle">Comunidades</h2>
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
