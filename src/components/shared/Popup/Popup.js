import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import imgDotPattern from './dot-pattern-popup.png';

const Content = styled.div``;

const Grid = styled.div`
  align-items: center;
  display: grid;
  height: 100%;

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 40px;
    grid-template-columns: repeat(2, minmax(0, 50%));
    min-height: 366px;
  }
`;

const Inner = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% auto;
  border: 1px solid rgb(177, 185, 194);
  height: 100%;
  padding: 0 10rem;

  ${mediaBreakpointUp('lg')} {
    padding: 0 10rem;
  }
`;

const Title = styled.div`
  ${mediaBreakpointUp('lg')} {
    text-align: right;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  h2 + p {
    margin: 0 0 2rem;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 49px 163px 0px rgba(0, 0, 0, 0.35);
  max-height: 100%;
  overflow: auto;

  ${mediaBreakpointUp('lg')} {
    padding: 5.6rem 6rem;
  }
`;

const Popup = ({children, isOpen, onClose: handleClose, title, ...props}) => {
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
          maxWidth: 1100,
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
        <Inner>
          <Grid>
            <Title>{title}</Title>
            <Content>{children}</Content>
          </Grid>
        </Inner>
      </Wrapper>
    </ReactModal>
  );
};

Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Popup;
