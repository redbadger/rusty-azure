import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li:first-of-type {
      margin-right: 1rem;
    }
  }

  a {
    color: black;
  }
`;

const Navigation: React.FC = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/presentation">Presentation</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Navigation;
