import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {BoardOverview} from "../components/BoardOverview/BoardOverview";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: orange;
  }
`

function App() {
    const userId = "someUser"

    return (
        <React.Fragment>
            <GlobalStyle/>
            <BoardOverview userId={userId}/>
        </React.Fragment>
    );
}

export default App;