import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { openModal } from '../app/features/modal';
import { selectModal } from '../app/features/modal';
import Chat from '../components/chat';
import Modal from '../components/modal';
import {
  navigateBackward,
  navigateForward,
  resetNavigation,
} from '../app/features/chat-navigation';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const shouldNavigateForward = (key: string): boolean =>
  key === 'ArrowRight' || key === 'ArrowDown';

const shouldNavigateBackward = (key: string): boolean =>
  key === 'ArrowLeft' || key === 'ArrowUp';

const PresentationPage: React.FC = () => {
  const dispatch = useDispatch();

  const { isOpen: modalIsOpen } = useSelector(selectModal);

  useEffect(() => {
    dispatch(resetNavigation());
  }, [dispatch]);

  useEffect(() => {
    dispatch(openModal());
  }, [dispatch]);

  useEffect(() => {
    const body = document.body;
    body.addEventListener('keyup', (event) => {
      const { key } = event;
      if (key && !modalIsOpen) {
        if (shouldNavigateForward(key)) {
          dispatch(navigateForward());
        } else if (shouldNavigateBackward(key)) {
          dispatch(navigateBackward());
        }
      }
    });
  });

  return (
    <>
      <Modal />
      <StyledMain>
        <Chat />
      </StyledMain>
    </>
  );
};
export default PresentationPage;
