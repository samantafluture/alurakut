import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/RelationsSidebar";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
import FriendsList from "../src/components/FriendsList";
import CommunitiesList from "../src/components/CommunitiesList";
import CommunityForm from "../src/components/ComunityForm";
import GitHubService from "../src/api/githubService";
import DataCMSService from "../src/api/datocmsService";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home({ quantidade, boxTitle }) {
  const [username, setUsername] = useState([]);
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    GitHubService.getUsername().then((name) => setUsername(name));

    DataCMSService.getCommunities().then((respostaCompleta) => {
      const allCommunities = respostaCompleta.data.allCommunities;
      setComunidades(allCommunities);
    })

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
            <h1 className="title">Bem-vindx, {username.login}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <CommunityForm
              comunidades={comunidades}
              setComunidades={setComunidades}
            />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <FriendsList
              boxTitle={"Amigos"}
              quantidade={6}
              followers={username.followers}
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
