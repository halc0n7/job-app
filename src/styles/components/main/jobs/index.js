import styled from "styled-components";
import { theme } from "../../..";
import mixins from "../../../mixins";
const { colors, fontSizes, shadows, xsBorderRadius } = theme;

export const StyledJobList = styled.div`
  border: 1px solid blue;
`;

export const StyledJobItem = styled.div`
  background-color: ${colors.white};
  border-radius: ${xsBorderRadius};
  box-shadow: ${shadows.jobItem};
  margin-bottom: 1.25em;
`;

export const StyledCard = styled.div`
  display: flex;
  padding: 12px;
`;

export const StyledImage = styled.img`
  border-radius: ${xsBorderRadius};
  height: 90px;
  max-width: 90px;
  object-fit: contain;
  width: 100%;
`;

export const StyledContent = styled.div`
  flex: 1;
  margin-left: 0.9em;

  & h3 {
    font-size: ${fontSizes.md};
    font-weight: 400;
    line-height: 18px;
    margin-top: 8px;
    margin-bottom: 14px;
  }

  & h4 {
    font-size: ${fontSizes.xs};
    line-height: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

export const StyledDetails = styled.div`
  ${mixins.flexBetween}
`;
