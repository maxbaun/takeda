import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import ExternalLink from '../../shared/ExternalLink';
import Icon from '../Icon';

const Wrapper = styled.button.attrs({
  className: 'btn'
})`
  align-items: center;
  background: none;
  border: 1px solid #000;
  border-radius: 2.6em;
  display: inline-flex;
  color: #000;
  cursor: pointer;
  font-family: ${props => props.theme.fontBody};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: normal;
  padding: 0.786em 1.6em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.2rem;
    padding: 0.9em 2.27em;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    padding: 0.786em 2.7em;
  }

  i {
    display: inline-block;
    transition: transform 0.2s ease-in-out;

    &:last-child {
      margin-left: 1.42em;
      transform: translate3d(0, 0, 0);
    }

    &:first-child {
      margin-right: 1.42em;
      transform: translate3d(0, 0, 0);
    }
  }

  &[data-icon] {
    padding: 0.786em 1.42em 0.786em 2.7em;
  }

  &:hover {
    > span {
      text-decoration: underline;
    }

    i {
      &:last-child {
        transform: translate3d(2px, 0, 0);
      }
      &:first-child {
        transform: translate3d(-2px, 0, 0);
      }
    }

    &:focus {
      outline: none;
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const Button = ({children, external, href, icon, iconRight, renderAs, ...props}) => {
  return (
    <Wrapper
      as={href ? (external ? (renderAs ? renderAs : ExternalLink) : Link) : 'button'}
      data-icon={icon}
      href={href && external && href ? href : null}
      to={href && !external && href ? href : null}
      {...props}
    >
      {icon && iconRight === false ? <Icon icon={icon} /> : null}
      <span>{children}</span>
      {icon && iconRight ? <Icon icon={icon} /> : null}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  external: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  renderAs: PropTypes.string
};

Button.defaultProps = {
  external: false,
  iconRight: true
};

export default Button;
