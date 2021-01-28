import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import {ButtonGreen} from '../../shared/Button';
import _Carousel from '../../shared/Carousel';
import Step from './Step';
import steps from './steps';

const Carousel = styled(_Carousel)`
  height: 100%;

  .slick-slider {
    height: 100%;
  }

  .slick-list {
    height: 100%;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-slide {
    display: flex;
    height: auto;
    align-items: center; //optional
    justify-content: center; //optional
  }
`;

const CarouselButtons = styled.div`
  color: #fff;
  margin: 3rem 0 0;

  button {
    cursor: pointer;
    display: block;
    margin: 0 auto;
  }

  .next {
    &:not(:last-child) {
      ${mediaBreakpointUp('lg')} {
        margin: 0 auto 2rem;
      }
    }
  }

  .skip {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.8rem;
    line-height: 1.55;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CarouselControls = styled.div`
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;

  ${mediaBreakpointUp('lg')} {
    bottom: 3rem;
  }
`;

const CarouselPaging = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 0;

  button {
    background: none;
    border: 1px solid #fff;
    border-radius: 50%;
    display: block;
    height: 8px;
    margin: 0 5px;
    padding: 0;
    width: 8px;

    &:hover {
      background-color: #fff;
    }
  }
`;

const Wrapper = styled.div`
  background-color: ${props => rgba(props.theme.blackPearl, 0.93)};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  .slick-dots {
    li {
      margin: 0 0.5rem;

      button {
        background-color: transparent;
        border: 1px solid #fff;
        height: 15px;
        width: 15px;
      }

      &.slick-active {
        button {
          background-color: #fff;
        }
      }
    }
  }
`;

const Tutorial = ({onComplete: handleComplete, ...props}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slider = useRef();

  const isLastSlide = slideIndex >= steps.length - 1;

  return (
    <Wrapper {...props}>
      <Carousel
        ref={slider}
        slickOptions={{
          arrows: false,
          beforeChange: (current, next) => setSlideIndex(next),
          centerMode: true,
          dots: false,
          infinite: false
        }}
      >
        {steps.map((step, index) => (
          <Step image={step.image} key={index}>
            {step.text}
          </Step>
        ))}
      </Carousel>
      <CarouselControls>
        <CarouselButtons>
          <ButtonGreen className="next" onClick={() => (isLastSlide ? handleComplete() : slider.current.slickNext())}>
            Next
          </ButtonGreen>
          <button
            className="skip"
            onClick={handleComplete}
            style={{opacity: isLastSlide ? 0 : 1, pointerEvents: isLastSlide ? 'none' : 'initial'}}
          >
            Skip
          </button>
        </CarouselButtons>
        <CarouselPaging>
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => slider.current.slickGoTo(index)}
              style={{backgroundColor: index === slideIndex ? '#fff' : 'transparent'}}
            />
          ))}
        </CarouselPaging>
      </CarouselControls>
    </Wrapper>
  );
};

Tutorial.propTypes = {
  onComplete: PropTypes.func
};

export default Tutorial;
