import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import {listUnstyled} from '../../../utils/lists';
import {mediaBreakpointUp} from '../../../utils/responsive';

const Wrapper = styled.div`
  .slick-slide {
    > div {
      > div {
        outline: none !important;
      }
    }
  }

  .slick-arrow {
    align-items: center;
    background: none;
    border: none;
    color: transparent;
    cursor: pointer;
    display: flex;
    height: 43px;
    justify-content: center;
    line-height: 0;
    outline: none !important;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 43px;
    z-index: 1;

    &::after {
      align-items: center;
      color: #000;
      background-color: ${props => props.theme.yellow};
      border-radius: 50%;
      display: flex;
      font-family: icomoon;
      font-size: 16px;
      height: 100%;
      justify-content: center;
      width: 100%;
    }

    &.slick-next {
      right: 0;

      &::after {
        content: '\\e900';
      }

      ${mediaBreakpointUp('md')} {
        right: -30px;
      }

      ${mediaBreakpointUp('lg')} {
        right: -40px;
      }

      ${mediaBreakpointUp('xl')} {
        right: -53px;
      }
    }

    &.slick-prev {
      left: 0;

      &::after {
        content: '\\e901';
      }

      ${mediaBreakpointUp('md')} {
        left: -30px;
      }

      ${mediaBreakpointUp('lg')} {
        left: -40px;
      }

      ${mediaBreakpointUp('xl')} {
        left: -53px;
      }
    }
  }

  .slick-dots {
    ${listUnstyled()};
    display: flex;
    margin-top: 2rem;
    text-align: center;

    ${mediaBreakpointUp('lg')} {
      margin-top: 5rem;
    }

    li {
      display: inline-block;
      margin: 0 0.8rem;

      button {
        background-color: #e3e4e7;
        border: none;
        border-radius: 50%;
        color: transparent;
        content: ' ';
        cursor: pointer;
        height: 11px;
        width: 11px;

        &:focus {
          outline: none;
        }
      }

      &.slick-active {
        button {
          background-color: #212d34;
        }
      }
    }
  }
`;

const Carousel = ({children, slickOptions, ...props}) => {
  const defaultOptions = {
    dots: true,
    draggable: false,
    focusOnSelect: false
  };

  return (
    <Wrapper {...props}>
      <Slider {...Object.assign(defaultOptions, slickOptions)}>{children}</Slider>
    </Wrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  slickOptions: PropTypes.object
};

export default Carousel;
