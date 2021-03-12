import React from 'react';
import conversation from '../data/script';
import styled from 'styled-components';
import Message from '../components/message';

const AllConversation = conversation.map(({ person, component }, key) => (
  <Message key={key} person={person} component={component} />
));

const StyledMain = styled.main`
  article {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: solid 1px #eee;
    padding: 10px;
    margin: 0 auto;
  }
`;

const PresentationPage: React.FC = () => {
  return (
    <StyledMain>
      {/* <h1>Presentation</h1> */}

      <article>{AllConversation}</article>
    </StyledMain>
  );
};
export default PresentationPage;
