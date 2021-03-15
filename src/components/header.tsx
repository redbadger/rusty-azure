import React from 'react';
import RustLondon from './svg/rust-london';
import Sally from './svg/sally';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  align-items: center;
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
    <picture>
      <Sally />
    </picture>
    <picture>
      <RustLondon />
    </picture>
  </StyledHeader>
);

export default Header;
