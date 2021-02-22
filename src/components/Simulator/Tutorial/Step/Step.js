import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Inner = styled.div`
  max-width: 460px;

  ${mediaBreakpointUp('lg')} {
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  color: #fff;
  padding: 1rem 0;
  text-align: center;

  img {
    margin: 0 auto 2rem;
    width: 75px;

    ${mediaBreakpointUp('sm')} {
      width: 116px;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 auto 4.2rem;
    }
  }

  p {
    font-size: 1.8rem;
    margin: 0;

    ${mediaBreakpointUp('sm')} {
      font-size: 1.8rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.55;
      margin: 0;
    }
  }
`;

const Step = ({children, image, ...props}) => {
  return (
    <Wrapper {...props}>
      <Inner>
        <img src={image} />
        {children}
      </Inner>
    </Wrapper>
  );
};

Step.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  image: PropTypes.string
};

Step.defaultProps = {
  canSkip: true,
  nextText: 'Next'
};

export default Step;
