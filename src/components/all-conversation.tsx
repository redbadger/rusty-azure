import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { selectChatNavigation } from '../app/features/chat-navigation';
import conversation from '../data/script';
import Message from './message';

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

export default Conversation;
