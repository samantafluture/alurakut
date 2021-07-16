import React from "react";
import CommunityItem from "../../components/CommunityItem";

export default function CommunitiesList({ comunidades }) {
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
