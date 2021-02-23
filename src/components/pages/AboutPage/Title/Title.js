import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.div`
  padding: 8rem 0 5rem;

  ${mediaBreakpointUp('sm')} {
    padding: 14rem 0 9rem;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 15.7rem 0 9.1rem;
  }

  h1 {
    margin: 0;
    text-align: right;
  }
`;

const Title = ({children, ...props}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Title;
