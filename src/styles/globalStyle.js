import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  background-color: ${colors.whitesmoke};
  color: ${colors.darkslateblue}; 
  font-family: ${fonts.SegoeUI};
  font-size: ${fontSizes.lg};
  margin: 0;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  width: 100%;
}

main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

img {
  border-style: none;
}

svg{
  fill: ${colors.silver};
  max-width: 18px;
  width: 100%;
}

button,
input,
optgroup,
select,
textarea {
  box-sizing: border-box;
  border: 0;
  border-radius: 0;
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  padding: 0;

  &:focus {
      outline: 0;
    }
}

button,
input { /* 1 */
  overflow: visible;
  background-color: transparent;
}

button,
select { /* 1 */
  text-transform: none;
  cursor: pointer;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

 ul {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
      position: relative;
    }
  }

[hidden] {
  display: none;
}

`;

export default GlobalStyle;
