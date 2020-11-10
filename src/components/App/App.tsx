import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
  }
`

function App() {
  return (
      <React.Fragment>
          <GlobalStyle/>
      </React.Fragment>
  );
}

export default App;
