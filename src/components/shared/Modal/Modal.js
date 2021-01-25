import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const CloseBtn = styled.button`
  background: rgba(0, 0, 0, 0);
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  height: 50px;
  opacity: 1;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 50px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:hover {
    background: #fff;
    outline: none;

    &::before,
    &::after {
      background: ${props => props.theme.red};
    }
  }

  span {
    border: 0 !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px !important;
    overflow: hidden;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
  }

  &::before,
  &::after {
    background: #fff;
    border-radius: 4px;
    content: ' ';
    display: block;
    height: 22px;
    left: 23px;
    position: absolute;
    top: 14px;
    width: 4px;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
  }

  &::before {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &::after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

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
          maxWidth: 1000,
          padding: 0,
          inset: '60px 25px'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 4
        }
      }}
    >
      <CloseBtn
        type="button"
        className="ReactModal__Close"
        aria-label="Close (Press escape to close)"
        onClick={handleClose}
      >
        <span>Close</span>
      </CloseBtn>
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
