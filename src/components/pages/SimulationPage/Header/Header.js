import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.div`
  margin: 0 auto 4rem;
  max-width: 640px;
  padding: 0 1.5rem;
  text-align: center;

  ${mediaBreakpointUp('lg')} {
    margin: 0 auto 8.6rem;
  }

  h1 {
    font-size: 2.5em;
    line-height: 0.89;
    margin: 0 0 4rem;

    ${mediaBreakpointUp('sm')} {
      font-size: 9rem;
      margin: 0 0 6.1rem;
    }

    ${mediaBreakpointUp('md')} {
      font-size: 10rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 5.7rem;
      margin: 0 0 3rem;
    }
  }

  p {
    margin: 0 0 3rem;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      margin: 0 0 5rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      line-height: 1.75;
      margin: 0 0 1rem;
    }

    &.note {
      font-size: 1.6rem;
      font-style: italic;
      line-height: 1.33;
      margin: 0 auto;
      max-width: 430px;

      ${mediaBreakpointUp('sm')} {
        font-size: 0.63em;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 0.75em;
        line-height: 1.6667;
        max-width: 550px;
      }
    }
  }
`;

const Header = ({children, ...props}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Header;
