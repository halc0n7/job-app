import styled from "styled-components";
import { mixins, theme } from "../../..";
import backgroundImage from "../../../../images/backgroundImg.png";

const { mdBorderRadius } = theme;
export const StyledSearch = styled.div`
  border: 1px solid red;
`;

export const StyledContent = styled.div`
  border-radius: ${mdBorderRadius};
  height: 140px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  margin: 1em 0;
  padding: 0 1em;
  position: relative;

  ${mixins.flexCenter}
`;
