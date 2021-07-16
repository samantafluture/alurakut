import React, { useEffect, useState } from "react";
import GitHubService from "../../api/api";
import FriendsItem from "../FriendsItem";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const friendsBox = friends.slice(0, 6);

  useEffect(() => {
    GitHubService.getFollowers().then((friendsList) => setFriends(friendsList));
  }, []);

  return (
    <>
      <h2 className="smallTitle">Amigos ({friends.length})</h2>
      <ul>
        {friendsBox.map((friend) => {
          return (
            <FriendsItem
              id={friend.login}
              url={friend.html_url}
              username={friend.login}
              photo={friend.avatar_url}
            />
          );
        })}
      </ul>
    </>
  );
}
