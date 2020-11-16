import styled from "styled-components";
import { mixins, theme } from "..";

const { colors, fontSizes, shadows, xsBorderRadius } = theme;

export const StyledInput = styled.input`
  background-color: ${colors.white};
  border-radius: ${xsBorderRadius};
  box-shadow: ${shadows.input};
  color: ${colors.darkslateblue};
  font-size: ${fontSizes.xs};
  font-weight: 500;
  line-height: ${fontSizes.sm};
  width: 100%;

  &::placeholder {
    color: ${colors.silver};
    font-weight: 400;
  }
`;

export const StyledPrimaryButton = styled.button`
  ${mixins.primaryButton}
`;

export const StyledCheckbox = styled.li`
  ${mixins.flexLeft};
  margin-bottom: 0.75em;

  & input {
    width: 18px;
    height: 18px;
  }

  & label {
    font-size: ${fontSizes.sm};
    font-weight: 500;
    line-height: 20px;
    margin: 0 0.75em;
    text-transform: capitalize;
  }
`;
