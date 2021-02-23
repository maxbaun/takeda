import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import styled, {useTheme} from 'styled-components';

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
    justify-content: center; //optional
    padding: 1.5rem 1.5rem 0;

    ${mediaBreakpointUp(320)} {
      padding: 6rem 1.5rem 0;
    }

    ${mediaBreakpointUp(400)} {
      padding: 10rem 1.5rem 0;
    }

    ${mediaBreakpointUp('sm')} {
      align-items: center; //optional
      padding: 0 1.5rem 0;
    }

    ${mediaBreakpointUp('md')} {
      padding: 0 1.5rem;
    }
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
    font-size: 1.8rem;
    line-height: 1;

    ${mediaBreakpointUp('md')} {
      font-size: 1.8rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.4rem;
    }

    &:not(:last-child) {
      margin: 0 auto 1rem;

      ${mediaBreakpointUp(400)} {
        margin: 0 auto 3rem;
      }

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
  bottom: 2rem;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;

  ${mediaBreakpointUp(320)} {
    bottom: 3rem;
  }

  ${mediaBreakpointUp(400)} {
    bottom: 4rem;
  }

  ${mediaBreakpointUp(500)} {
    bottom: 6rem;
  }

  ${mediaBreakpointUp('md')} {
    bottom: 5rem;
  }

  ${mediaBreakpointUp('lg')} {
    bottom: 3rem;
  }
`;

const CarouselPaging = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 0;

  ${mediaBreakpointUp(320)} {
    margin: 3rem 0 0;
  }

  ${mediaBreakpointUp(500)} {
    margin: 8rem 0 0;
  }

  ${mediaBreakpointUp('sm')} {
    margin: 5rem 0 0;
  }

  ${mediaBreakpointUp(700)} {
    margin: 8rem 0 0;
  }

  ${mediaBreakpointUp('md')} {
    margin: 6rem 0 0;
  }

  ${mediaBreakpointUp(800)} {
    margin: 7rem 0 0;
  }

  ${mediaBreakpointUp(900)} {
    margin: 9rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 8.9rem 0 0;
  }

  button {
    background: none;
    border: 1px solid #fff;
    border-radius: 50%;
    display: block;
    height: 12px;
    margin: 0 5px;
    padding: 0;
    width: 12px;

    ${mediaBreakpointUp('sm')} {
      height: 16px;
      width: 16px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 8px;
      width: 8px;
    }

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
  const theme = useTheme();

  const isLastSlide = slideIndex >= steps.length - 1;

  return (
    <Wrapper {...props}>
      <Carousel
        ref={slider}
        slickOptions={{
          arrows: false,
          beforeChange: (current, next) => setSlideIndex(next),
          centerMode: true,
          centerPadding: 0,
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
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
              style={{
                backgroundColor: index === slideIndex ? '#fff' : index < slideIndex ? theme.green : 'transparent',
                borderColor: index < slideIndex ? theme.green : '#fff'
              }}
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
