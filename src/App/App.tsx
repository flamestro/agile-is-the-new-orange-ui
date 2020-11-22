import React from "react";
import { createGlobalStyle } from "styled-components";
import { BoardOverview } from "../components/BoardOverview/BoardOverview";
import { orange1 } from "../components/Colors/Colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  ${orange1};
    font-family: Roboto, serif;
  }
`;

export const HideGlobalScrollbar = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const App = () => {
  const userId = "someUser";

  return (
    <>
      <GlobalStyle />
      <BoardOverview userId={userId} />
    </>
  );
};

export default App;
