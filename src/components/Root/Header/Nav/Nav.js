import 'styled-components/macro';

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.nav`
  font-size: 1.4rem;

  ul {
    ${listUnstyled()};
    align-items: center;
    display: flex;

    > li {
      > a {
        color: #000;
        display: block;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;

        &:hover,
        &.active {
          color: ${props => props.theme.red};
        }

        &:hover {
          span {
            text-decoration: underline;
          }
        }

        &.has-chevron {
          align-items: center;
          display: flex;

          &::after {
            align-items: center;
            background-color: ${props => props.theme.red};
            border-radius: 50%;
            color: #fff;
            content: '\\e900';
            display: inline-flex;
            font-family: icomoon;
            height: 2em;
            justify-content: center;
            width: 2em;
          }
        }

        &.btn {
          border: 1px solid rgb(33, 45, 52);
          border-radius: 40px;
          padding: 0.71em 1.07em;

          &:hover {
            border-color: ${props => props.theme.red};
          }
        }

        &::after,
        > i {
          margin-left: 1.3rem;
        }
      }
    }
  }
`;

const Nav = ({breakpoint, children, isOpen, ...props}) => {
  return (
    <Wrapper
      {...props}
      css={`
        background-color: #fff;
        height: 100vh;
        left: 0;
        opacity: ${isOpen ? 1 : 0};
        padding-top: 101px;
        position: absolute;
        top: 0;
        width: 100%;
        transform: ${isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        z-index: 3;

        ${mediaBreakpointUp(breakpoint)} {
          display: block;
          height: auto;
          opacity: 1;
          padding-top: 0;
          position: static;
          top: 0;
          transform: none;
          width: auto;
        }

        > ul {
          flex-flow: column nowrap;

          ${mediaBreakpointUp(breakpoint)} {
            flex-flow: row nowrap;
          }

          > li {
            margin: 1rem 0;

            &:not(:last-child) {
              ${mediaBreakpointUp('lg')} {
                margin-right: 0.5rem;
              }

              ${mediaBreakpointUp(1300)} {
                margin-right: 4rem;
              }
            }
          }
        }
      `}
    >
      {children}
    </Wrapper>
  );
};

Nav.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool
};

Nav.defaultProps = {
  breakpoint: 'lg'
};

export default Nav;
