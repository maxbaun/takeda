import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Wrapper = styled.div`
  ${mediaBreakpointUp('lg')} {
    padding: 15.7rem 0 9.1rem;
  }

  h1 {
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
