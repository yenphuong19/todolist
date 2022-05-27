import React from 'react';
import Provider from './Provider';
import Header from '../Header/index';
import Container from '../Container/index';

function App() {
  return (
    <Provider>
      <Header />
      <Container />
    </Provider>
  );
}

export default App;
