import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
import { selectModal, closeModal } from '../app/features/modal';

ReactModal.setAppElement('#root');

const Modal: React.FC = () => {
  const { isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(closeModal());
  };

  return (
    <ReactModal isOpen={isOpen}>
      <button onClick={handleOnClick}>close</button>
      <h1>Modal</h1>
    </ReactModal>
  );
};

// const StyledModal = styled(Modal)`
//   background-color: brown;

//   .modal {
//     background-color: pink;
//   }
// `;

export default Modal;
