// App.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from './Button';

//нельзя импортировать не из src, + понятия не имею где он берет папку components
//import { Container, Nav, Content } from '../components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const App = () => {
  return (
    <>
      <Button>I am a button</Button>
      <Button primary>I am a primary button</Button>
    </>
  )
}

export default App;