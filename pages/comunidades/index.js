import React, { useEffect, useState } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import PageGrid from "../../src/components/PageGrid";
import ProfileSidebar from "../../src/components/ProfileSidebar";
import CommunitiesList from "../../src/components/CommunitiesList";
import { ProfileRelationsBoxWrapper } from "../../src/components/RelationsSidebar";
import { AlurakutMenu } from "../../src/lib/AlurakutCommons";
import Box from "../../src/components/Box";
import CommunityForm from "../../src/components/ComunityForm";
import DatoCMSService from "../../src/api/datocmsService";

export default function ComunidadesPage(props) {
  const githubUser = props.githubUser;
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    DatoCMSService.getCommunities().then((respostaCompleta) => {
      const allCommunities = respostaCompleta.data.allCommunities;
      setComunidades(allCommunities);
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
          <ProfileRelationsBoxWrapper>
            <CommunitiesList
              boxTitle={"Comunidades"}
              comunidades={comunidades}
            />
          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="subTitle">Adicionar uma comunidade</h2>
            <CommunityForm
              comunidades={comunidades}
              setComunidades={setComunidades}
            />
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
