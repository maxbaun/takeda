import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1505px;
  padding: 0 1.5rem;

  ${mediaBreakpointUp('lg')} {
    padding-left: 125px;
  }

  ${mediaBreakpointUp('xl')} {
    padding-left: 171px;
  }
`;

const Wrapper = styled.div`
  background-color: #b40000;
  color: #fff;
  left: 0;
  padding: 2.1rem 0 1.9rem;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;

  p {
    font-size: 0.875em;
    margin: 0 0 0.2rem;
  }
`;

const UnsupportedBrowser = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

UnsupportedBrowser.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default UnsupportedBrowser;
