import React, { useEffect, useState } from "react";
import GitHubService from "../../api/api";
import FriendsItem from "../FriendsItem";

export default function FriendsList({ quantidade, randomico }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    GitHubService.getFollowers(quantidade, randomico).then((friendsList) =>
      setFriends(friendsList)
    );
  }, []);

  return (
    <>
      <h2 className="smallTitle">
        Amigos ({friends.length})
      </h2>
      <ul>
        {friends.map((friend) => {
          return (
            <FriendsItem
              key={friend.login}
              html_url={friend.html_url}
              login={friend.login}
              avatar_url={friend.avatar_url}
            />
          );
        })}
      </ul>
    </>
  );
}
