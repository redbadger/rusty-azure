import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IMessage } from '../data/script';
import TypingIndicator from './typing-indicator';

const StyledDiv = styled.div`
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 8px 15px;
  position: relative;

  p {
    margin: 0;
  }

  &.yours {
    align-self: flex-start;
    background-color: #eee;
    margin-right: 25%;

    &:before {
      background: #eee;
      border-bottom-right-radius: 15px;
      bottom: 0;
      content: '';
      height: 20px;
      left: -7px;
      position: absolute;
      width: 20px;
      z-index: 0;
    }

    &::after {
      background: white;
      border-bottom-right-radius: 10px;
      bottom: 0;
      content: '';
      height: 20px;
      left: -10px;
      position: absolute;
      width: 10px;
      z-index: 1;
    }
  }

  &.mine {
    align-self: flex-end;
    background-attachment: fixed;
    background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
    color: white;
    margin-left: 25%;

    &:before {
      background-attachment: fixed;
      background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
      border-bottom-left-radius: 15px;
      bottom: 0;
      content: '';
      height: 20px;
      position: absolute;
      right: -8px;
      width: 20px;
      z-index: 0;
    }

    &:after {
      background: white;
      border-bottom-left-radius: 10px;
      bottom: 0;
      content: '';
      height: 20px;
      position: absolute;
      right: -10px;
      width: 10px;
      z-index: 1;
    }
  }
`;

interface MessageProps extends IMessage {
  person: 'pedro' | 'audience-member' | string;
  component: () => JSX.Element;
  id: number;
}

const Message: React.FC<MessageProps> = ({
  person,
  component: Component,
  id,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const bubbleType = person === 'pedro' ? 'mine' : 'yours';

  useEffect(() => {
    // Set async cleanup on compoment to prevent memory leak
    // https://stackoverflow.com/a/60907638/4842303

    let isMounted = true;

    const {
      props: { children: innerText },
    } = Component();

    const time = innerText.length * 20;

    setTimeout(() => {
      if (isMounted) {
        setShowMessage(true);
      }
    }, time);

    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  });

  return (
    <>
      {showMessage ? (
        <StyledDiv className={bubbleType} id={`${id + 1}`}>
          <Component />
        </StyledDiv>
      ) : (
        <TypingIndicator bubbleType={bubbleType} />
      )}
    </>
  );
};

export default Message;
