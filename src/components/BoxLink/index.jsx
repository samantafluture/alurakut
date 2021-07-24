export default function BoxLink({ url, linkTitlte }) {
  return (
    <>
      <hr />
      <a className="boxLink" href={url}>
        {linkTitlte}
      </a>
    </>
  );
}
