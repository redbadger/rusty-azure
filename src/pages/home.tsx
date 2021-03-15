import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Styles = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li:first-of-type {
      margin-right: 1rem;
    }
  }

  a {
    color: black;
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
      <nav>
        <ul>
          <li>
            <Link to="/presentation">Presentation</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </main>
  </Styles>
);

export default HomePage;
