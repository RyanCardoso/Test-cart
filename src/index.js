import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

//Page
import Home from './pages/Home';

const GloablStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GloablStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

