import React from "react";
import Link from "next/link";

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
              <Link href={`/profile/${scrap.creatorSlug}`} passHref>
                <a>
                  <img src={`https://github.com/${scrap.creatorSlug}.png`} />
                  <span>{scrap.creatorSlug}</span>
                </a>
              </Link>
              <p>{scrap.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
