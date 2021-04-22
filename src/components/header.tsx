import React from 'react';
import styled from 'styled-components';

import RustLondon from './svg/rust-london';
import Sally from './svg/sally';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;

  a {
    display: block;
  }

  picture {
    &:first-of-type {
      max-width: 200px;
    }
    &:last-of-type {
      max-width: 150px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <a href="https://red-badger.com/" target="_blank" rel="noreferrer">
      <picture>
        <Sally />
      </picture>
    </a>
    <a
      href="https://www.meetup.com/Rust-London-User-Group/"
      target="_blank"
      rel="noreferrer"
    >
      <picture>
        <RustLondon />
      </picture>
    </a>
  </StyledHeader>
);

export default Header;
