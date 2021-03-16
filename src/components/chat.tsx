import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import Conversation from './all-conversation';
import Ferris from './svg/ferris';

const StyledArticle = styled.article`
  border: solid 1px #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  min-height: calc(100vh - (1.25rem * 2));
  width: 400px;

  header {
    align-items: center;
    background-color: rgba(244, 244, 244, 0.98);
    border-bottom: solid 1px #eee;
    display: flex;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 400px;
    z-index: 10;
    .arrow {
      border-bottom: 2px solid #0085d1;
      border-left: 2px solid #0085d1;
      display: block;
      height: 16px;
      min-width: 16px;
      transform: rotate(45deg);
    }

    div {
      align-items: center;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 0.625rem;
      }
    }

    picture {
      border-radius: 50%;
      max-width: 12.5%;
    }
  }

  .conversation-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
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
