import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1608px;
  padding: 0 1.5rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
  position: relative;

  ${mediaBreakpointUp('lg')} {
    padding: 22.7rem 0;
  }

  &::before {
    background-color: ${props => props.theme.solitude};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
  }
`;

const ImpactOnLife = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

ImpactOnLife.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ImpactOnLife;
