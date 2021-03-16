import React from 'react';
import styled from 'styled-components';

import RustLondon from './svg/rust-london';
import Sally from './svg/sally';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
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
