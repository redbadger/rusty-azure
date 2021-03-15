import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Conversation from './all-conversation';
import Ferris from './svg/ferris';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: solid 1px #eee;
  margin: 0 auto;
  justify-content: flex-end;
  min-height: calc(100vh - (1.25rem * 2));

  header {
    width: 400px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: rgba(244, 244, 244, 0.98);
    border-bottom: solid 1px #eee;
    display: flex;
    padding: 10px;
    align-items: center;
    .arrow {
      display: block;
      border-left: 2px solid #0085d1;
      border-bottom: 2px solid #0085d1;
      min-width: 16px;
      transform: rotate(45deg);
      height: 16px;
    }

    div {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 0.625rem;
      }
    }

    picture {
      max-width: 12.5%;
      border-radius: 50%;
    }
  }

  .conversation-wrapper {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Chat: React.FC = () => (
  <StyledArticle>
    <header>
      <Link to="/" className="arrow" />
      <div>
        <picture>
          <Ferris />
        </picture>
        <p>Audience member</p>
      </div>
    </header>
    <div className="conversation-wrapper">{Conversation()}</div>
  </StyledArticle>
);

export default Chat;
