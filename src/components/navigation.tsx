import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
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
