export default function RelationsItem({ id, url, image, title }) {
    return (
      <li key={id}>
        <a href={url}>
          <img src={image} alt={title} />
          <span>{title}</span>
        </a>
      </li>
    );
  }
  