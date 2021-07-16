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
      id: "20210308",
      title: "Discografias",
      image:
        "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-discografias.png?raw=true",
      url: "https://www.orkut.br.com/MainCommunity?cmm=11815",
    },
    {
      id: "20200128",
      title: "Happy Pride",
      image:
        "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-pride.jpeg?raw=true",
      url: "https://www.etsy.com/shop/Surpride",
    },
    {
      id: "20210121",
      title: "Clube Arduino",
      image:
        "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-arduino.jpeg?raw=true",
      url: "https://www.arduino.cc/",
    },
    {
      id: "20200206",
      title: "Amo Montreal",
      image:
        "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-montreal.jpeg?raw=true",
      url: "https://www.mtl.org/en",
    },
    {
      id: "20191221",
      title: "Modular Synths",
      image:
        "https://github.com/samantafluture/alurakut/blob/aula2/src/assets/comunidade-synth.jpeg?raw=true",
      url: "https://www.instructables.com/Intro-to-Analog-Synthesizer/",
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
