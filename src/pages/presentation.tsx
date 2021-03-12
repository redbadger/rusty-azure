import React from 'react';
import conversation from '../data/script';
import styled from 'styled-components';

const AllConversation = conversation.map(
  ({ person, component: Component }, i) => {
    const bubbleType = person === 'pedro' ? 'mine' : 'yours';
    return (
      <div className={`message ${bubbleType}`} key={i}>
        <Component />
      </div>
    );
  },
);

const StyledMain = styled.main`
  article {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: solid 1px #eee;
    padding: 10px;
    margin: 0 auto;
  }

  .message {
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
  }

  .yours {
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

  .mine {
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
`;

const PresentationPage: React.FC = () => {
  return (
    <StyledMain>
      <h1>Presentation</h1>

      <article>{AllConversation}</article>
    </StyledMain>
  );
};
export default PresentationPage;
