import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Message from '../components/message';
import { useDispatch, useSelector } from 'react-redux';
import conversation from '../data/script';
import {
  selectChatNavigation,
  navigateForward,
} from '../app/features/chat-navigation';

const Conversation = () => {
  const { index } = useSelector(selectChatNavigation);
  const [newConversation, setNewConversation] = useState([conversation[0]]);

  useEffect(() => {
    setNewConversation(conversation.slice(0, index));
  }, [index]);

  return newConversation.map(({ person, component }, key) => (
    <Message key={key} person={person} component={component} id={key} />
  ));
};

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

const PresentationPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    const { key } = event;

    if (key) {
      if (key === 'ArrowRight') {
        dispatch(navigateForward());
      }
    }
  };

  return (
    <StyledMain onKeyDown={handleOnKeyDown} tabIndex={0}>
      <article>{Conversation()}</article>
    </StyledMain>
  );
};
export default PresentationPage;
