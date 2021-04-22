import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledFooter = styled.footer`
  background-color: var(--black);
  padding: 1.5rem 1.25rem;

  ul {
    display: flex;
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

const Navigation: React.FC = () => {
  const [isHome, setIsHome] = useState(true);
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    pathname === '/about' ? setIsHome(false) : setIsHome(true);
  }, [isHome, pathname]);

  return (
    <StyledFooter>
      <ul>
        <li>
          {isHome ? <Link to="/about">About</Link> : <Link to="/">Home</Link>}
        </li>
        <li>
          <Link to="/presentation">Presentation</Link>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Navigation;
