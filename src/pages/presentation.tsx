import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  navigateForward,
  navigateBackward,
} from '../app/features/chat-navigation';
import Conversation from '../components/conversation';

const StyledMain = styled.main`
  padding: 1.25rem;
  article {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: solid 1px #eee;
    padding: 10px;
    margin: 0 auto;
    justify-content: flex-end;
    min-height: calc(100vh - (1.25rem * 2));
  }
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

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  });

  return (
    <StyledMain onKeyDown={handleOnKeyDown} tabIndex={0}>
      <article>{Conversation()}</article>
    </StyledMain>
  );
};
export default PresentationPage;
