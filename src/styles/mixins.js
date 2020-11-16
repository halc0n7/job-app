import { css } from "styled-components";
import theme from "./theme";

const { colors, fontSizes } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css`
    display: flex;
    justify-content: left;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  smallButton: css`
    border: 1px solid ${colors.darkslateblue};
    border-radius: ${theme.xsBorderRadius};
    padding: 0.3em;
    font-size: ${fontSizes.xs};
    font-weight: 600;
    line-height: 16px;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.darkslateblue};
      color: ${colors.white};
    }
  `,

  primaryButton: css`
    background-color: ${colors.dodgerblue};
    border: 1px solid ${colors.dodgerblue};
    border-radius: ${theme.xsBorderRadius};
    color: #ffffff;
    cursor: pointer;
    font-size: ${fontSizes.md};
    font-weight: 500;
    line-height: 18px;
    padding: 0.75em 1.5em;
    text-decoration: none;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      opacity: 0.75;
    }

    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.gray};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.gray};
    }
  `,
};

export default mixins;
