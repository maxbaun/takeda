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
  background-color: ${props => props.theme.solitude};
  padding: 10rem 0;

  ${mediaBreakpointUp('lg')} {
    padding: 22.7rem 0;
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
