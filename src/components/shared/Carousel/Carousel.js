import {darken} from 'polished';
import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';
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
    height: 44px;
    justify-content: center;
    line-height: 0;
    outline: none;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    top: calc(100% - 22px);
    transform: translateY(-50%);
    width: 44px;
    z-index: 1;

    ${mediaBreakpointUp('sm')} {
      height: 83px;
      top: calc(100% - 41.5px);
      width: 83px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 43px;
      top: 50%;
      width: 43px;
    }

    &::after {
      align-items: center;
      color: #fff;
      background-color: ${props => props.theme.yellow};
      border-radius: 50%;
      display: flex;
      font-family: icomoon;
      height: 100%;
      justify-content: center;
      transition: background-color 0.2s ease-in-out;
      width: 100%;

      ${mediaBreakpointUp('sm')} {
        font-size: 30px;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 16px;
      }
    }

    &:hover {
      &::after {
        background-color: ${props => darken(0.05, props.theme.yellow)};
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }

    &.slick-prev {
      left: 30px;

      &::after {
        content: '\\e901';
      }

      ${mediaBreakpointUp('sm')} {
        left: 40px;
      }

      ${mediaBreakpointUp('lg')} {
        left: -40px;
      }

      ${mediaBreakpointUp('xl')} {
        left: -53px;
      }
    }

    &.slick-next {
      right: 30px;

      &::after {
        content: '\\e900';
      }

      ${mediaBreakpointUp('sm')} {
        right: 49px;
      }

      ${mediaBreakpointUp('lg')} {
        right: -40px;
      }

      ${mediaBreakpointUp('xl')} {
        right: -53px;
      }
    }
  }

  .slick-dots {
    ${listUnstyled()};
    align-items: center;
    display: flex !important;
    height: 44px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    text-align: center;
    width: calc(100% - 160px);

    ${mediaBreakpointUp('sm')} {
      height: 83px;
      width: calc(100% - 270px);
    }

    ${mediaBreakpointUp('lg')} {
      height: auto;
      margin-top: 5rem;
    }

    li {
      display: inline-block;
      margin: 0 1rem;

      ${mediaBreakpointUp('sm')} {
        margin: 0 1.5rem;
      }

      ${mediaBreakpointUp('lg')} {
        margin: 0 0.8rem;
      }

      button {
        background-color: #e3e4e7;
        border: none;
        border-radius: 50%;
        color: transparent;
        content: ' ';
        cursor: pointer;
        height: 15px;
        overflow: hidden;
        transition: background-color 0.2s ease-in-out;
        width: 15px;

        ${mediaBreakpointUp('sm')} {
          height: 23px;
          width: 23px;
        }

        ${mediaBreakpointUp('lg')} {
          height: 16px;
          width: 16px;
        }

        &:hover {
          background-color: ${darken(0.05, '#e3e4e7')};
        }

        &:focus {
          outline: none;
        }

        &:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
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

const Carousel = forwardRef(({children, slickOptions, ...props}, ref) => {
  const defaultOptions = {
    dots: true,
    draggable: false,
    focusOnSelect: false
  };

  return (
    <Wrapper {...props}>
      <Slider {...Object.assign(defaultOptions, slickOptions)} ref={ref}>
        {children}
      </Slider>
    </Wrapper>
  );
});

Carousel.displayName = 'Carousel';

Carousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  slickOptions: PropTypes.object
};

export default Carousel;
