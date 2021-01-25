import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import Carousel from '../../shared/Carousel';
import Step from './Step';
import steps from './steps';

const Wrapper = styled.div`
  background-color: ${props => rgba(props.theme.blackPearl, 0.5)};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

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

const Tutorial = ({onSkipClick: handleSkip, ...props}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slider = useRef();

  return (
    <Wrapper {...props}>
      <Carousel
        ref={slider}
        slickOptions={{arrows: false, beforeChange: (current, next) => setSlideIndex(next), centerMode: true}}
      >
        {steps.map((step, index) => (
          <Step
            canSkip={slideIndex + 1 < steps.length}
            image={step.image}
            key={index}
            nextText="Next"
            onNextClick={() => {
              slider.current.slickNext();
            }}
            onSkipClick={handleSkip}
          >
            {step.text}
          </Step>
        ))}
      </Carousel>
    </Wrapper>
  );
};

Tutorial.propTypes = {
  onSkipClick: PropTypes.func
};

export default Tutorial;
