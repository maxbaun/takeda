import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import imgDotPattern from './dot-pattern-popup.png';

const Content = styled.div``;

const Footer = styled.div`
  margin: 3rem 0 0;
  grid-column: 1/3;

  ${mediaBreakpointUp('sm')} {
    margin: 5rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
  }
`;

const Grid = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  padding: 10rem 0 8rem;

  ${mediaBreakpointUp('sm')} {
    padding: 13rem 3rem 10rem;
  }

  ${mediaBreakpointUp('md')} {
    padding: 17rem 6rem 13rem;
  }

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 40px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(2, minmax(0, 50%));
    -ms-grid-columns: minmax(0, 50%) 40px minmax(0, 50%);
    margin: 0 auto;
    max-width: 580px;
    min-height: 366px;
    padding: 12rem 0 9rem;
  }

  > * {
    &:nth-child(even) {
      -ms-grid-column: 3;
    }
    &:nth-child(odd) {
      -ms-grid-column: 1;
    }
  }
`;

const Inner = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% auto;
  border: 1px solid rgb(177, 185, 194);
  height: 100%;
  padding: 0 1.5rem;

  ${mediaBreakpointUp('lg')} {
    padding: 0 1.5rem;
  }
`;

const Title = styled.div`
  ${mediaBreakpointUp('lg')} {
    text-align: right;
  }

  h2 {
    margin: 0 0 2rem;

    ${mediaBreakpointUp('sm')} {
      font-size: 3.4rem;
      line-height: 1.2;
      margin: 0 0 3rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 3.6rem;
      line-height: 1.11;
      margin: 0;
    }
  }

  h2 + p {
    margin: 0 0 2rem;
  }

  a {
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 49px 163px 0px rgba(0, 0, 0, 0.35);
  max-height: 100%;
  overflow: auto;
  padding: 2rem 2.5rem;

  ${mediaBreakpointUp('sm')} {
    padding: 4rem 4.5rem;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 5.6rem 6rem;
  }

  p {
    font-size: 1.6rem;
    margin: 0;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.2rem;
      line-height: 1.36;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      line-height: 1.75;
    }
  }
`;

const Popup = ({children, footer, isOpen, onClose: handleClose, title, ...props}) => {
  return (
    <ReactModal
      {...props}
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        content: {
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 0,
          margin: '0 auto',
          maxWidth: 'calc(100% - 80px)',
          width: 1100,
          overflow: 'visible',
          padding: 0,
          inset: '60px 25px'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: 4
        }
      }}
    >
      <Wrapper>
        <Inner>{children}</Inner>
      </Wrapper>
    </ReactModal>
  );
};

Popup.Content = Content;
Popup.Footer = Footer;
Popup.Grid = Grid;
Popup.Title = Title;

Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

Popup.defaultProps = {};

export default Popup;
