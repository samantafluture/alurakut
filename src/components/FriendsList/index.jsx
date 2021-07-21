import React, { useEffect, useState } from "react";
import GitHubService from "../../api/githubService";
import RelationsItem from "../../components/RelationsItem";

export default function FriendsList({ quantidade, boxTitle, followers }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    GitHubService.getFollowers(quantidade).then((friendsList) =>
      setFriends(friendsList)
    );
  }, []);

  return (
    <>
      <h2 className="smallTitle">
        {boxTitle}
        <a className="boxLink" href={`/`}>
          &nbsp;({followers})
        </a>
      </h2>
      <ul>
        {friends.map((friend) => {
          return (
            <RelationsItem
              id={friend.login}
              url={friend.html_url}
              title={friend.login}
              image={friend.avatar_url}
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
