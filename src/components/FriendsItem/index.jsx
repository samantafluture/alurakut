export default function FriendsItem({ id, url, photo, username }) {
  return (
    <li key={id}>
      <a href={url}>
        <img src={photo} alt={username} />
        <span>{username}</span>
      </a>
    </li>
  );
}
