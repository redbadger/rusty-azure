import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Navigation from '../components/navigation';

const Styles = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
`;

const HomePage: React.FC = () => (
  <Styles>
    <Header />
    <main>
      <h1>Extending Azure SDK for Rust</h1>
      <h2>April 2021, Date: TBC</h2>
      <p>
        How we extended the unofficial Azure SDK for Rust and now is being back
        by Microsoft
      </p>
      <Navigation />
    </main>
  </Styles>
);

export default HomePage;
