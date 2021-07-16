import React, { useState } from "react";
import CommunityItem from "../../components/CommunityItem";

export default function CommunitiesList() {
  const [comunidades, setComunidades] = useState([
    {
      id: "20210716",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
    {
      id: "20210308",
      title: "Discografias",
      image: "../../assets/comunidade-discografias.png",
    },
  ]);

  return (
    <>
      <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
      <ul>
        {comunidades.map((comunidade) => {
          return (
            <CommunityItem
              id={comunidade.id}
              url={comunidade.url}
              image={comunidade.image}
              title={comunidade.title}
            />
          );
        })}
      </ul>
    </>
  );
}
