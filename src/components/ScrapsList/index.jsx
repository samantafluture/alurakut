import React from "react";

export default function ScrapsList({ scraps, boxTitle, name, image, url }) {
  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/`}>
          &nbsp;({scraps.length})
        </a>
      </h2>
      <ul>
        {scraps.map((scrap) => {
          return (
            <li key={scrap.id}>
              <a href={url}>
                <img src={image} />
                <span>{name}</span>
              </a>
              <p>{scrap.text}</p>
            </li>
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
