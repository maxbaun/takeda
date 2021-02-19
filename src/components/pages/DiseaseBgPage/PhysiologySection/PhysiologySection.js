import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import imgDotPattern from './dot-pattern-pathophysiology.png';

const Inner = styled.div`
  h2 {
    margin: 0 0 5rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 8rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 10rem;
    }
  }

  > *:not(h2):not(:last-child) {
    margin: 0 0 5rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 15.3rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 11rem;
    }
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 80% auto;
  padding: 15.2rem 0 11rem;
  position: relative;

  ${mediaBreakpointUp('sm')} {
    background-size: 90% auto;
    padding: 26.2rem 0 11rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-size: 50% auto;
    padding: 13.4rem 0 15.4rem;
  }

  &::before {
    background-color: ${props => props.theme.solitude};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }
`;

const PhysiologySection = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>{children}</Inner>
      </div>
    </Wrapper>
  );
};

PhysiologySection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default PhysiologySection;
