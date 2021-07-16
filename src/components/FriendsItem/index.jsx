export default function FriendsItem({ url, photo, username }) {
  return (
    <li>
      <a href={url}>
        <img src={photo} alt={username} />
        <span>{username}</span>
      </a>
    </li>
  );
}
