import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal, closeModal } from '../app/features/modal';
import styled from 'styled-components';

const StyledModalContent = styled.aside`
  position: relative;

  button {
    appearance: none;
    border: unset;
    background-color: transparent;
    position: absolute;
    right: 0;
    padding: 0;
    display: block;
    text-decoration: underline 2px solid;
  }

  h1 {
    margin-top: 0;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  li {
    width: 50%;
    p {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  li:last-of-type {
    border-left: 1px solid rgb(209, 213, 218);
    padding-left: 1.25rem;
  }

  kbd {
    display: inline-block;
    padding: 1rem;
    color: rgb(68, 77, 86);
    vertical-align: middle;
    background-color: rgb(250, 251, 252);
    border: 1px solid rgb(209, 213, 218);
    border-radius: 6px;
    box-shadow: rgb(209, 213, 218) 0px -1px 0px inset;
  }
`;

ReactModal.setAppElement('#root');

const Modal: React.FC = () => {
  const { isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(closeModal());
  };

  return (
    <ReactModal isOpen={isOpen} className="modal" overlayClassName="overlay">
      <StyledModalContent>
        <button onClick={handleOnClick}>close</button>
        <h1>Navigation</h1>
        <p>Please, follow this instructions to navigate presentation slides:</p>

        <ul>
          <li>
            <h2>To go next bubble use</h2>
            <p>
              <kbd>&#8595;</kbd> <kbd>&#8594;</kbd>
            </p>
          </li>
          <li>
            <h2>To go previous bubble use</h2>
            <p>
              <kbd>&#8593;</kbd> <kbd>&#8592;</kbd>
            </p>
          </li>
        </ul>
      </StyledModalContent>
    </ReactModal>
  );
};

export default Modal;
