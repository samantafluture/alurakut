import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/components/ProfileSidebar";
import FriendsList from "../src/components/FriendsList";
import CommunitiesList from "../src/components/CommunitiesList";
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
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image"),
                };

                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
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
            <CommunitiesList />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

console.log("olá");
