import React from "react";

export default function ScrapsList({ scraps, boxTitle }) {
  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/recados`}>
          &nbsp;({scraps.length})
        </a>
      </h2>
      <ul>
        {scraps.map((scrap) => {
          return (
            <li key={scrap.id}>
              <a href={`/users/${scrap.creatorSlug}`}>
                <img src={`https://github.com/${scrap.creatorSlug}.png`} />
                <span>{scrap.creatorSlug}</span>
              </a>
              <p>{scrap.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

