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
  padding: 10rem 0 3rem;

  ${mediaBreakpointUp('sm')} {
    padding: 14.3rem 0 5rem;
  }

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
          <p>
            Hereditary Angioedema (HAE) is a rare but debilitating and life-threatening condition.
            <br />
            Use our filter to visualize an HAE facial attack.
          </p>
          <p className="note">
            Images are never saved or stored in this application. You must have a webcam in order to use this tool.
            <br />
            The HAE simulator is for illustrative purposes only and is not a clinical diagnostic tool.
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
