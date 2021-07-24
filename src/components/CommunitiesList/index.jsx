import React from "react";
import RelationsItem from "../RelationsItem";

export default function CommunitiesList({ comunidades, filteredComunidades, boxTitle }) {
  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/comunidades`}>
          &nbsp;({comunidades.length})
        </a>
      </h2>
      <ul>
        {filteredComunidades.map((comunidade) => {
          return (
            <RelationsItem
              id={comunidade.id}
              url={comunidade.link}
              title={comunidade.title}
              image={comunidade.imageUrl}
            />
          );
        })}
      </ul>
      
    </>
  );
}
