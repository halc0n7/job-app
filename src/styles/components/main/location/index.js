import styled from "styled-components";
import { theme } from "../../..";

const { fontSizes, colors } = theme;

export const StyledLocation = styled.div`
  border: 1px solid green;
`;

export const StyledTitle = styled.h2`
  color: ${colors.silver};
  font-size: ${fontSizes.md};
  font-weight: 700;
  line-height: 20px;
  margin: 1em 0;
  text-transform: uppercase;
`;
