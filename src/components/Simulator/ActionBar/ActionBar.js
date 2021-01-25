import {darken, rgba} from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Icon from '../../shared/Icon';

const BtnTake = styled.button`
  align-items: center;
  background-color: #9d9d9d;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 4rem;
  height: 83px;
  justify-content: center;
  width: 83px;

  &:hover {
    background-color: ${() => darken(0.05, '#9d9d9d')};
  }
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  height: 123px;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  button {
    pointer-events: ${props => (props.isDisabled ? 'none' : 'initial')};
    transition: background-color 0.2s ease-in-out;
  }

  &::before {
    content: ' ';
    pointer-events: ${props => (props.isDisabled ? 'block' : 'none')};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-color: ${() => rgba('#eeeeee', 0.5)};
    opacity: ${props => (props.isDisabled ? 1 : 0)};
    z-index: 0;
  }
`;

const ActionBar = ({isDisabled, onTakeClick: handleTakeClick, ...props}) => {
  console.log(isDisabled);

  return (
    <Wrapper {...props} isDisabled={isDisabled}>
      <Inner>
        <BtnTake onClick={handleTakeClick}>
          <Icon icon="camera" />
        </BtnTake>
      </Inner>
    </Wrapper>
  );
};

ActionBar.propTypes = {
  isDisabled: PropTypes.bool,
  onTakeClick: PropTypes.func
};

export default ActionBar;
