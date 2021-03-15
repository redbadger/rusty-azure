import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  navigateForward,
  navigateBackward,
} from '../app/features/chat-navigation';
import Chat from '../components/chat';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const shouldNavigateForward = (key: string): boolean =>
  key === 'ArrowRight' || key === 'ArrowDown';

const shouldNavigateBackward = (key: string): boolean =>
  key === 'ArrowLeft' || key === 'ArrowUp';

const PresentationPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    const { key } = event;

    if (key) {
      if (shouldNavigateForward(key)) {
        dispatch(navigateForward());
      } else if (shouldNavigateBackward(key)) {
        dispatch(navigateBackward());
      }
    }
  };

  return (
    <StyledMain onKeyDown={handleOnKeyDown} tabIndex={0}>
      <Chat />
    </StyledMain>
  );
};
export default PresentationPage;
