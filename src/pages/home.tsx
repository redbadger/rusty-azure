import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Navigation from '../components/navigation';

const Styles = styled.div`
  main {
    margin: 0 auto;
    max-width: 800px;
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
        How we extended the unofficial Azure SDK for Rust that is now being
        backed by Microsoft
      </p>
      <Navigation />
    </main>
  </Styles>
);

export default HomePage;
