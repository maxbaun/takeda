import React from 'react';

import scrollToElement from '../../../utils/scrollToElement';
import {ButtonPrimary} from '../../shared/Button';
import References from '../../shared/References/References';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import SymptomQuiz from '../../shared/SymptomQuiz';
// import PropTypes from 'prop-types'
import Hero from './Hero';
import PatientExamplesSection from './PatientExamplesSection';
import RiskSection from './RiskSection';

const Home = () => {
  return (
    <div>
      <Hero ctaText="Start Simulation" ctaUrl="/" onScrollToClick={() => scrollToElement('riskMisdiagnosisSection')}>
        <h1>HAE Simulator</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et.
        </p>
        <ButtonPrimary href="/symptom-map" icon="chevron-right">
          Discover Symptom Map
        </ButtonPrimary>
      </Hero>
      <RiskSection id="riskMisdiagnosisSection">
        <SectionHeader>
          <h2>Risk of Misdiagnosis or Delayed Diagnosis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <ul>
            <li className="green">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="blue">Aenean euismod bibendum laoreet</li>
            <li className="red">Proin gravida dolor sit amet lacus accumsan et</li>
            <li className="yellow">Viverra justo commodo proin sodales pulvinar sic tempor</li>
          </ul>
          <ButtonPrimary icon="chevron-right">Explore More HAE Information</ButtonPrimary>
        </SectionHeader>
      </RiskSection>
      <PatientExamplesSection
        ctaText={<>Explore More HAE Information</>}
        ctaUrl="/more-info"
        examples={[
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/1-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/1-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/2-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/2-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/1-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/1-before.png`
          },
          {
            after: `${process.env.PUBLIC_URL}/img/patient-examples/2-after.png`,
            before: `${process.env.PUBLIC_URL}/img/patient-examples/2-before.png`
          }
        ]}
        note="*Photos of symptoms are portrayed by actors"
      >
        <SectionHeader>
          <h2>Patient Examples</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </SectionHeader>
      </PatientExamplesSection>
      <SymptomQuiz />
      <References>
        1. Lumry WR. <em>Am J Manag Care</em> 2013;19:S111–S118; 2. Banerji A. <em>Ann Allergy Asthma Immunol</em>{' '}
        2013;111:329–336; 3. Longhurst HJ & Bork K. <em>Br J Hosp Med</em> (Lond) 2019;80:391–398; 4. Bork K, et al.{' '}
        <em>J Allergy Clin Immunol</em>
        2012;130:692–697; 5. Agostoni A, et al. <em>J Allergy Clin Immunol</em> 2004;114:S51–S131; 6. Bork K, et al.{' '}
        <em>Am J Gastroenterol</em> 2006;101:619–627; 7. Zanichelli A, et al. <em>Ann Allergy Asthma Immunol</em>{' '}
        2016;117:394–39; 8. Banerji A, et al. <em>Allergy Asthma Proc</em> 2018;39:212–223; 9. Schöffl C, et al.{' '}
        <em>J Dtsch Dermatol Ges</em> 2019;17:416–423; 10. Zanichelli A, et al. <em>Clin Trans Allergy</em> 2018;8:42;
        11. Grumach AS, et al. <em>J Allergy Clin Immunol Pract</em>
        2019;7:1078–1080; 12. Betschel S, et al. <em>Allergy Asthma Clin Immunol</em> 2019;15:72; 13. Zuraw BL.{' '}
        <em>N Engl J Med</em>
        2008;359:1027–1036.
      </References>
    </div>
  );
};

Home.propTypes = {};

export default Home;
