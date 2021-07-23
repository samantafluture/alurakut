import React from "react";
import RelationsItem from "../RelationsItem";

export default function CommunitiesList({ comunidades, boxTitle }) {
  const comunidadesVisible = comunidades.slice(0, 6);

  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/`}>
          &nbsp;({comunidades.length})
        </a>
      </h2>
      <ul>
        {comunidadesVisible.map((comunidade) => {
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
      <hr />
      <a className="boxLink" href={`/`}>
        Ver todos
      </a>
    </>
  );
}
