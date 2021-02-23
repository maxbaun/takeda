import 'styled-components/macro';

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.nav`
  font-size: 1.4rem;

  > ul {
    ${listUnstyled()};
    align-items: center;
    display: flex;

    > li {
      > a,
      > button {
        background: none;
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
          line-height: 1;
          padding: 0.7857em 1.07em 0.857em;

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
        align-items: center;
        background-color: #fff;
        display: flex;
        flex-flow: column nowrap;
        height: calc(100vh - 101px);
        justify-content: center;
        left: 0;
        opacity: ${isOpen ? 1 : 0};
        position: fixed;
        top: 101px;
        width: 100%;
        transform: ${isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        z-index: 1000;

        ${mediaBreakpointUp(breakpoint)} {
          background-color: transparent;
          display: flex;
          flex-flow: row nowrap;
          height: auto;
          justify-content: flex-end;
          opacity: 1;
          padding-top: 0;
          position: static;
          top: 0;
          transform: none;
          width: 100%;
          z-index: initial;
        }

        > ul {
          flex-flow: column nowrap;

          ${mediaBreakpointUp(breakpoint)} {
            flex-flow: row nowrap;
          }

          &:first-child {
            flex: 1;
            justify-content: center;

            ${mediaBreakpointUp(breakpoint)} {
              flex: initial;
              justify-content: flex-end;
            }
          }

          &:last-child {
            margin: 0 0 5rem;

            ${mediaBreakpointUp(breakpoint)} {
              justify-content: flex-end;
              margin: 0;
            }
          }

          &:not(:last-child),
          > li {
            margin: 1.8rem 0;

            &:not(:last-child) {
              ${mediaBreakpointUp('lg')} {
                margin: 0 2rem 0 0;
              }

              ${mediaBreakpointUp(1300)} {
                margin: 0 4rem 0 0;
              }
            }

            a {
              font-size: 1.8rem;

              ${mediaBreakpointUp(breakpoint)} {
                font-size: 1.4rem;
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
  breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool
};

Nav.defaultProps = {
  breakpoint: 1050
};

export default Nav;
