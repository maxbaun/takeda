import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.div`
  margin: 0 auto 4rem;
  max-width: 630px;
  text-align: center;

  ${mediaBreakpointUp('lg')} {
    margin: 0 auto 8.6rem;
  }

  h1 {
    line-height: 0.89;
    margin: 0 0 3.4rem;

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 3rem;
    }
  }

  p {
    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      line-height: 1.75;
      margin: 0 0 1rem;
    }

    &.note {
      font-size: 0.75em;
      font-style: italic;
      line-height: 1.6667;
      margin: 0;
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
