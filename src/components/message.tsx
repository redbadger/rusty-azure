import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../data/script';

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
    align-self: end;
    color: white;
    margin-left: 25%;
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
  /* Typing indicator */
`;

const StyledTypingIndicator = styled.div`
  & {
    background-color: #e6e7ed;
    will-change: transform;
    width: auto;
    border-radius: 50px;
    padding: 20px;
    position: relative;
    animation: 2s bulge infinite ease-out;
    display: flex;
    max-width: 90px;
  }
  & span {
    height: 15px;
    width: 15px;
    margin: 0 1px;
    background-color: #9e9ea1;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
  }
  & span:nth-of-type(1) {
    animation: 1s blink infinite 0.3333s;
  }
  & span:nth-of-type(2) {
    animation: 1s blink infinite 0.6666s;
  }
  & span:nth-of-type(3) {
    animation: 1s blink infinite 0.9999s;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
  }
  @keyframes bulge {
    50% {
      transform: scale(1.05);
    }
  }
  &.yours &::before,
  &.yours &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -2px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #e6e7ed;
  }
  &.yours &::after {
    height: 10px;
    width: 10px;
    left: -10px;
    bottom: -10px;
  }

  &.mine {
    align-self: end;
  }

  &.mine &::before,
  &.mine &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #e6e7ed;
  }
  &.mine &::after {
    height: 10px;
    width: 10px;
    right: -10px;
    bottom: -10px;
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
  const bubbleType = person === 'pedro' ? 'mine' : 'yours';
  return (
    <>
      <StyledTypingIndicator className={bubbleType}>
        <span></span>
        <span></span>
        <span></span>
      </StyledTypingIndicator>
      <StyledDiv className={bubbleType} id={`${id + 1}`}>
        <Component />
      </StyledDiv>
    </>
  );
};

export default Message;
