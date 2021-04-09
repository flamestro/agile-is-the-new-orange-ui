import React from "react";
import { createGlobalStyle } from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
  const userId = "Some Random User";

  return (
    <>
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <BoardOverview userId={userId} />
      </DndProvider>
    </>
  );
};

export default App;
