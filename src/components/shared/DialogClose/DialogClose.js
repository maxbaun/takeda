import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Wrapper = styled.button.attrs({
  ariaLabel: 'Close (Press escape to close)',
  className: 'ReactModal__Close',
  type: 'button'
})`
  background: rgba(0, 0, 0, 0);
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  height: 50px;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  -webkit-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;

  ${mediaBreakpointUp('lg')} {
    right: 20px;
    top: 20px;
  }

  &:focus,
  &:hover {
    background: #fff;
    outline: none;

    &::before,
    &::after {
      background-color: ${props => props.theme.red};
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
    background-color: #fff;
    border-radius: 4px;
    content: ' ';
    display: block;
    height: 22px;
    left: 23px;
    position: absolute;
    top: 14px;
    width: 4px;
    -webkit-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;
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

const DialogClose = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <span>Close</span>
    </Wrapper>
  );
};

DialogClose.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default DialogClose;
