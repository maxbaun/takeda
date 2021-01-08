import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Wrapper = styled.button`
  align-items: center;
  background: none;
  border: 1px solid #000;
  border-radius: 1.42em;
  display: inline-flex;
  color: #000;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: ${props => (props.hasIcon ? '0.786em 1.42em 0.786em 2.7em' : '0.786em 2.7em')};
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;

  i {
    display: inline-block;
    transition: transform 0.2s ease-in-out;

    &:last-child {
      margin-left: 1.42em;
      transform: translate3d(0, 0, 0);
    }
  }

  &:hover {
    i {
      &:last-child {
        transform: translate3d(2px, 0, 0);
      }
    }
  }
`;

const Button = ({children, icon, ...props}) => {
  return (
    <Wrapper hasIcon={icon && icon !== ''} {...props}>
      <span>{children}</span>
      {icon ? <Icon icon={icon} /> : null}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node)),
  icon: PropTypes.string
};

export default Button;
