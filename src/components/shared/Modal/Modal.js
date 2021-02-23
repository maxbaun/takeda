import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import DialogClose from '../DialogClose';

const Container = styled.div`
  /* display: table-cell;
  vertical-align: middle; */
`;

const Inner = styled.div`
  /* display: table;
  height: 100%;
  width: 100%; */
`;

const Modal = ({children, isOpen, onClose: handleClose, ...props}) => {
  return (
    <ReactModal
      {...props}
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        content: {
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 0,
          margin: '0 auto',
          maxWidth: 'calc(100% - 80px)',
          width: 1000,
          padding: 0,
          inset: '60px 25px'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 4
        }
      }}
    >
      <DialogClose onClick={handleClose} />

      <Inner>
        <Container>{children}</Container>
      </Inner>
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
