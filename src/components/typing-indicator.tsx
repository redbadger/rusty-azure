import React from 'react';
import styled from 'styled-components';

interface TypingIndicatorProps {
  bubbleType: 'mine' | 'yours';
}

const StyledTypingIndicator = styled.div`
  & {
    background-color: #e6e7ed;
    will-change: transform;
    width: auto;
    border-radius: 50px;
    padding: 15px;
    position: relative;
    animation: 2s bulge infinite ease-out;
    display: inline-flex;
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

  &.yours {
    align-self: start;
  }
  &.mine {
    align-self: end;
  }
`;

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ bubbleType }) => (
  <StyledTypingIndicator className={bubbleType}>
    <span></span>
    <span></span>
    <span></span>
  </StyledTypingIndicator>
);

export default TypingIndicator;
