import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import Simulator from '../../Simulator';
import imgDotPattern from './dot-pattern-simulation.png';
import Header from './Header';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1460px;
`;

const SimulatorWrap = styled.div``;

const Wrapper = styled.div`
  background-color: ${props => props.theme.solitude};
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  background-position: 100% 0;

  ${mediaBreakpointUp('lg')} {
    padding: 13.8rem 0 15.3rem;
  }
`;

const SimulationPage = props => {
  return (
    <Wrapper {...props}>
      <Container>
        <Header>
          <h1>HAE SIMULATOR</h1>
          <p>Use our filter to experience a facial attack from a patient’s perspective.</p>
          <p className="note">
            Images are never saved or stored in this application. You must have a webcam in order to use this tool. The
            HAE simulator is for illustrative purposes only and is not a clinical diagnostic tool.
          </p>
        </Header>
        <SimulatorWrap>
          <Simulator />
        </SimulatorWrap>
      </Container>
    </Wrapper>
  );
};

export default SimulationPage;
