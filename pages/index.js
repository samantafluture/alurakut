import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/RelationsSidebar";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
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

export default function Home({ quantidade, boxTitle }) {
  const [username, setUsername] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    GitHubService.getUsername().then((name) => setUsername(name));

    DatoCMSService.getCommunities().then((respostaCompleta) => {
      const allCommunities = respostaCompleta.data.allCommunities;
      setComunidades(allCommunities);
    })

    DatoCMSService.getScraps().then((respostaCompleta) => {
      const allScraps = respostaCompleta.data.allScraps;
      setScraps(allScraps);
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
            <h1 className="title">Bem-vindx, {username.name}</h1>
            <OrkutNostalgicIconSet />
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
            <ScrapForm
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
