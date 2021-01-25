import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonGreen} from '../../../shared/Button';

const Inner = styled.div`
  ${mediaBreakpointUp('lg')} {
    margin: 0 auto;
    max-width: 460px;
  }
`;

const Wrapper = styled.div`
  color: #fff;
  padding: 1rem 0;
  text-align: center;

  img {
    margin: 0 auto;
    width: 116px;

    ${mediaBreakpointUp('lg')} {
      margin: 0 auto 4.2rem;
    }
  }

  p {
    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.55;
      margin: 0 0 3.4rem;
    }
  }

  button {
    cursor: pointer;
    display: block;
    margin: 0 auto;
  }

  .next {
    &:not(:last-child) {
      ${mediaBreakpointUp('lg')} {
        margin: 0 auto 5.5rem;
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

const Step = ({
  canSkip,
  children,
  image,
  nextText,
  onNextClick: handleNextClick,
  onSkipClick: handleSkipClick,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Inner>
        <img src={image} />
        {children}
        <ButtonGreen className="next" onClick={handleNextClick}>
          {nextText}
        </ButtonGreen>
        {canSkip ? (
          <button className="skip" onClick={handleSkipClick}>
            Skip
          </button>
        ) : null}
      </Inner>
    </Wrapper>
  );
};

Step.propTypes = {
  canSkip: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  image: PropTypes.string,
  nextText: PropTypes.string,
  onNextClick: PropTypes.func,
  onSkipClick: PropTypes.func
};

Step.defaultProps = {
  canSkip: true,
  nextText: 'Next'
};

export default Step;
