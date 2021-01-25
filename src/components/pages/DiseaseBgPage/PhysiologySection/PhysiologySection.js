import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import imgDotPattern from './dot-pattern-pathophysiology.png';

const Inner = styled.div`
  h2 {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 10rem;
    }
  }

  > *:not(h2):not(:last-child) {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 11rem;
    }
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-position: 100% 0;
  background-repeat: no-repeat;
  position: relative;

  ${mediaBreakpointUp('lg')} {
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