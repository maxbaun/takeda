import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
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
  font-family: ${props => props.theme.fontBody};
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.786em 2.7em;
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

  &[data-icon] {
    padding: 0.786em 1.42em 0.786em 2.7em;
  }

  &:hover {
    i {
      &:last-child {
        transform: translate3d(2px, 0, 0);
      }
    }
  }
`;

const Button = ({children, href, icon, ...props}) => {
  return (
    <Wrapper as={href ? Link : 'button'} data-icon={icon} to={href && href} {...props}>
      <span>{children}</span>
      {icon ? <Icon icon={icon} /> : null}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  href: PropTypes.string,
  icon: PropTypes.string
};

export default Button;
