import styled from "styled-components";
import Box from "../Box";

export const ScrapsBox = styled(Box)`
ul {
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  list-style: none;
}
li {
  display: flex;
}
li > p {
  padding: 10px;
  background-color: #F1F9FE;
  color: #333333;
  width: 100%;
  border-radius: 8px;
  margin-left: 8px;
  font-size: .85rem;
}
img {
  object-fit: cover;
  background-position: center center;
  max-width: 100%;
  height: 100%;
  position: relative;
}
ul li a {
  display: inline-block;
  height: 102px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  span {
    color: #ffffff;
    font-size: 10px;
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: 2;
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(0deg, #00000073, transparent);
  }

}
`;

export default ScrapsBox;