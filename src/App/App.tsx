import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {BoardOverview} from "../components/BoardOverview/BoardOverview";
import {white} from "../components/Colors/Colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  ${white};
    font-family: Roboto, serif;
  }
`

export const HideGlobalScrollbar = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

function App() {
    const userId = "someUsertest"

    return (
        <React.Fragment>
            <GlobalStyle/>
            <BoardOverview userId={userId}/>
        </React.Fragment>
    );
}

export default App;