import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import { closeModal, openModal, selectModal } from '../app/features/modal';

const StyledModalContent = styled.aside`
  position: relative;

  button {
    appearance: none;
    background-color: transparent;
    border: unset;
    display: block;
    padding: 0;
    position: absolute;
    right: 0;
    text-decoration: underline 2px solid;
    cursor: pointer;
  }

  h1 {
    margin-top: 0;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
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
    background-color: rgb(250, 251, 252);
    border-radius: 6px;
    border: 1px solid rgb(209, 213, 218);
    box-shadow: rgb(209, 213, 218) 0px -1px 0px inset;
    color: rgb(68, 77, 86);
    display: inline-block;
    padding: 1rem;
    vertical-align: middle;
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

  useEffect(() => {
    dispatch(openModal());
  }, [dispatch]);

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
