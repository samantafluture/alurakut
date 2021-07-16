import React from "react";
import CommunityItem from "../../components/CommunityItem";

export default function CommunitiesList({ comunidades }) {
  const comunidadesBox = comunidades.slice(0, 6);

  return (
    <>
      <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
      <ul>
        {comunidadesBox.map((comunidade) => {
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
