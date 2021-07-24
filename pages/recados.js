import React, { useEffect, useState } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import PageGrid from "../src/components/PageGrid";
import ProfileSidebar from "../src/components/ProfileSidebar";
import ScrapsBox from "../src/components/ScrapsBox";
import ScrapsList from "../src/components/ScrapsList";
import Box from "../src/components/Box";
import ScrapForm from "../src/components/ScrapForm";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";
import DatoCMSService from "../src/api/datocmsService";
import GitHubService from "../src/api/githubService";

export default function RecadosPage(props) {
  const githubUser = props.githubUser;
  const [username, setUsername] = useState([]);
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    GitHubService.getUsername(githubUser).then((name) => setUsername(name));

    DatoCMSService.getScraps().then((respostaCompleta) => {
      const allScraps = respostaCompleta.data.allScraps;
      setScraps(allScraps);
    });
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <PageGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="mainArea" style={{ gridArea: "mainArea" }}>
          <ScrapsBox>
            <ScrapsList
              boxTitle={"Recados"}
              scraps={scraps}
              name={username.login}
              image={username.avatar_url}
              url={username.html_url}
            />
          </ScrapsBox>  
          <Box>
            <h2 className="subTitle">Deixar um recado</h2>
            <ScrapForm scraps={scraps} setScraps={setScraps} />
          </Box>
        </div>
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
