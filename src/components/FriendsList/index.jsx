import React from "react";
import RelationsItem from "../RelationsItem";

export default function FriendsList({ followers, boxTitle }) {

  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/`}>
          &nbsp;({followers.length})
        </a>
      </h2>
      <ul>
        {followers.slice(0,6).map((follower) => {
          return (
            <RelationsItem
              id={follower.login}
              url={follower.html_url}
              title={follower.login}
              image={follower.avatar_url}
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

/**
 * 
 * <>
              <li key={follower.id}>
                <a href={follower.html_url}>
                  <img src={follower.avatar_url} />
                  <span>{follower.login}</span>
                </a>
              </li>
            </>
 */