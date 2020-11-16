import React from "react";
import MainRouter from "./router/MainRouter";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <MainRouter />
    </div>
  );
};

export default App;
