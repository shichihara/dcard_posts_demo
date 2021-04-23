import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Contents from './components/Contents';
import GlobalStyle from "../theme/globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Contents/>
    </>
  );
};

export default App;