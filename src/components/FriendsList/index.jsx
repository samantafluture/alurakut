import React from "react";
import RelationsItem from "../RelationsItem";

export default function FriendsList({ followers, filteredFollowers, boxTitle }) {

  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/amigos`}>
          &nbsp;({followers.length})
        </a>
      </h2>
      <ul>
        {filteredFollowers.map((follower) => {
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