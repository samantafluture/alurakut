import styled from "styled-components";
import Box from "../Box";

export const BioBox = styled(Box)`
  p {
    padding: 10px;
    margin: 12px 0 0 0;
    color: #333333;
    width: 100%;
    border-radius: 8px;
    font-size: 0.85rem;
    background-color: #f1f9fe;
  }
`;

export default function ProfileBio({ boxTitle, bio, local }) {
  return (
    <BioBox>
      <section>
        <h1 className="title">{boxTitle}</h1>
        <article>
          <p>{bio}</p>
          <p>{local}</p>
        </article>
      </section>
    </BioBox>
  );
}
