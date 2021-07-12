export default function FriendsItem({ login, avatar_url, url }) {
  return (
    <li>
      <a href={url}>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </a>
    </li>
  );
}
