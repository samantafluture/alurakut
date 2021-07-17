import React from "react";
import RelationsItem from "../RelationsItem";

export default function CommunitiesList({ comunidades, boxTitle }) {
  const comunidadesBox = comunidades.slice(0, 6);

  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/`}>
          &nbsp;({comunidades.length})
        </a>
      </h2>
      <ul>
        {comunidadesBox.map((comunidade) => {
          return (
            <RelationsItem
              id={comunidade.id}
              url={comunidade.url}
              title={comunidade.title}
              image={comunidade.image}
            />
          );
        })}
      </ul>
      <hr />
      <a className="boxLink" href={`/`}>
        Ver todos
      </a>
    </>
  );
}
