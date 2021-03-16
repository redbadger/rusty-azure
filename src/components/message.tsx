import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMessage } from '../data/script';
import TypingIndicator from './typing-indicator';

const StyledDiv = styled.div`
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  position: relative;

  p {
    margin: 0;
  }

  &.yours {
    margin-right: 25%;
    background-color: #eee;
    align-self: start;

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: -7px;
      height: 20px;
      width: 20px;
      background: #eee;
      border-bottom-right-radius: 15px;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: -10px;
      width: 10px;
      height: 20px;
      background: white;
      border-bottom-right-radius: 10px;
    }
  }

  &.mine {
    margin-left: 25%;
    align-self: end;
    color: white;
    background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
    background-attachment: fixed;

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: 0;
      right: -8px;
      height: 20px;
      width: 20px;
      background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
      background-attachment: fixed;
      border-bottom-left-radius: 15px;
    }

    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: -10px;
      width: 10px;
      height: 20px;
      background: white;
      border-bottom-left-radius: 10px;
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
