import React, {useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import References from '../../shared/References/References';
import Simulator from '../../Simulator';
import imgDotPattern from './dot-pattern-simulation.png';
import Header from './Header';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1460px;
`;

const SimulatorWrap = styled.div`
  padding: 0 1.5rem;

  ${mediaBreakpointUp('lg')} {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.solitude};
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  background-position: 130% 0;
  background-size: 40% auto;
  padding: 10rem 0 0;

  ${mediaBreakpointUp('sm')} {
    background-position: 120% 0;
    background-size: 40% auto;
    padding: 14.3rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    background-position: 100% 0;
    background-size: auto;
    padding: 13.8rem 0 0;
  }
`;

const SimulationPage = props => {
  const [showReferences, setShowReferences] = useState(null);

  return (
    <Wrapper {...props}>
      <Container>
        <Header>
          <h1>
            HAE
            <br />
            SIMULATOR
          </h1>
          <p>
            Hereditary Angioedema (HAE) is a rare but debilitating and life-threatening condition.
            <br />
            Use our filter to visualize an HAE facial attack.
          </p>
          <p className="note">
            Images are never saved or stored in this application. You must have a webcam in order to use this tool. The
            HAE simulator is for illustrative purposes only and is not a clinical diagnostic tool.
          </p>
        </Header>
        <SimulatorWrap>
          <Simulator onShowReferences={setShowReferences} />
        </SimulatorWrap>
      </Container>
      {showReferences ? (
        <References>
          1. Lumry WR. <em>Am J Manag Care</em> 2013:19;S103-S110; 2. Banerji A. <em>Ann Allergy Asthma Immunol</em>{' '}
          2013;111:329–336; 3. Longhurst HJ & Bork K. <em>Br J Hosp Med (Lond)</em> 2019;80:391–398; 4. Bork K, et al.{' '}
          <em>J Allergy Clin Immunol</em> 2012;130:692–697; 5. Agostoni A, et al. <em>J Allergy Clin Immunol</em>{' '}
          2004;114:S51–S131; 6. Bork K, et al. <em>Am J Gastroenterol</em> 2006;101:619–627; 7. Zanichelli A, et al.{' '}
          <em>Ann Allergy Asthma Immunol</em> 2016;117:394–398; 8. Banerji A, et al. <em>Allergy Asthma Proc</em>{' '}
          2018;39:212–223; 9. Schöffl C, et al. <em>J Dtsch Dermatol Ges</em> 2019;17:416–423; 10. Zanichelli A, et al.{' '}
          <em>Clin Trans Allergy</em> 2018;8:42; 11. Grumach AS, et al. <em>J Allergy Clin Immunol Pract</em>{' '}
          2019;7:1078–1080; 12. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72; 13. Zuraw BL.{' '}
          <em>N Engl J Med</em> 2008;359:1027–1036.
        </References>
      ) : null}
    </Wrapper>
  );
};

export default SimulationPage;
