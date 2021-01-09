import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 32px;
    height: 4px;
    background: ${({open, theme}) => (open ? theme.red : theme.red)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      margin-left: auto;
      opacity: ${({open}) => (open ? '0' : '1')};
      transform: ${({open}) => (open ? 'translateX(20px)' : 'translateX(0)')};
      width: 50%;
    }

    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Hamburger = ({onClick: handleClick, open, ...props}) => {
  return (
    <StyledBurger open={open} onClick={handleClick} {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Hamburger.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
};

Hamburger.defaultProps = {
  onClick: () => {}
};

export default Hamburger;
