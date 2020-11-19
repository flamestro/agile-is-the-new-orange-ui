import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {BoardOverview} from "../components/BoardOverview/BoardOverview";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
  }
`

function App() {

    return (
        <React.Fragment>
            <GlobalStyle/>
            <button> create Board</button>
            <br/>
            <BoardOverview boardIds={["5fb1984fcfe6e71807232dc8"]}/>

        </React.Fragment>
    );
}

export default App;