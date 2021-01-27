import {darken} from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../../../utils/responsive';
import Icon from '../../../../../shared/Icon';

const Wrapper = styled.button`
  align-items: center;
  background: none;
  background-color: ${props => {
    if (props.isActive) {
      return props.theme[`${props.color}--active`];
    }

    return props.theme[props.color];
  }};
  border: 2px solid ${props => props.theme[props.color]};
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 50px;
  justify-content: center;
  position: absolute;
  transition: background-color 0.2s ease-in-out;
  width: 50px;
  z-index: 2;

  ${mediaBreakpointUp('lg')} {
  }

  &:hover {
    background-color: ${props => darken(0.05, props.theme[props.color])};
    text-decoration: underline;
  }
`;

const HotSpot = ({color, isActive, x, y, ...props}) => {
  return (
    <Wrapper {...props} isActive={isActive} color={color} style={{left: x, top: y}}>
      <Icon icon={isActive ? 'minus' : 'plus'} />
    </Wrapper>
  );
};

HotSpot.propTypes = {
  isActive: PropTypes.bool,
  color: PropTypes.oneOf(['yellow', 'green', 'blue']),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

HotSpot.defaultProps = {
  color: 'green',
  x: 0,
  y: 0
};

export default HotSpot;
