import {darken} from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled, {keyframes} from 'styled-components';

import Icon from '../Icon';

const pulseRing = keyframes`
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
`;

const getBackgroundColor = props => {
  if (props.isActive && props.theme[`${props.color}--active`]) {
    return props.theme[`${props.color}--active`];
  }

  return props.theme[props.color];
};

const Wrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 50px;
  justify-content: center;
  overflow: visible;
  position: absolute;
  width: 50px;
  z-index: 2;
  -ms-flex-pack: center;

  &::before {
    background-color: ${props => getBackgroundColor(props)};
    border: 2px solid ${props => props.theme[props.color]};
    border-radius: 50%;
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    width: 100%;
    z-index: 0;
  }

  &::after {
    animation: ${pulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    background-color: ${props => props.theme[props.color]};
    border-radius: 50%;
    box-sizing: border-box;
    content: ' ';
    display: ${props => (props.isActive && props.pulsing ? 'block' : 'none')};
    height: 200%;
    margin-left: -50%;
    margin-top: -50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 200%;
    z-index: -1;
  }

  i {
    /* position: absolute; */
    z-index: 1;
  }

  &:hover {
    &::before {
      background-color: ${props => darken(0.05, props.theme[props.color])};
      transform: scale(1.2);
    }
  }
`;

const HotSpot = ({color, isActive, pulsing, x, y, style, ...props}) => {
  return (
    <Wrapper {...props} isActive={isActive} pulsing={pulsing} color={color} style={{left: x, top: y, ...style}}>
      <Icon icon={isActive ? 'minus' : 'plus'} />
    </Wrapper>
  );
};

HotSpot.propTypes = {
  color: PropTypes.oneOf(['yellow', 'green', 'blue', 'red']),
  isActive: PropTypes.bool,
  pulsing: PropTypes.bool,
  style: PropTypes.object,
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

HotSpot.defaultProps = {
  color: 'green',
  pulsing: true,
  style: {},
  x: 0,
  y: 0
};

export default HotSpot;
