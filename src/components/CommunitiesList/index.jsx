import React from "react";
import RelationsItem from "../RelationsItem";

export default function CommunitiesList({ comunidades, boxTitle }) {
  
  
  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/comunidades`}>
          &nbsp;({comunidades.length})
        </a>
      </h2>
      <ul>
        {comunidades.map((comunidade) => {
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
