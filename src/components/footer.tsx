import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--black);
  padding: 1.5rem 1.25rem;

  ul {
    display: flex;
    /* justify-content: center; */
    list-style: none;
    margin: 0;
    padding: 0;

    li:first-of-type {
      margin-right: 1rem;
    }
  }

  a {
    color: var(--white);
  }
`;

const Navigation: React.FC = () => (
  <StyledFooter>
    <ul>
      <li>
        <Link to="/presentation">Presentation</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </StyledFooter>
);

export default Navigation;
