import React from 'react';

import {ButtonPrimary} from '../../shared/Button';
// import PropTypes from 'prop-types'
import Hero from './Hero';
import PatientExamplesSection from './PatientExamplesSection';
import RiskSection from './RiskSection';

const Home = () => {
  return (
    <div>
      <Hero ctaText="Start Simulation" ctaUrl="/">
        <h1>HAE Simulator</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et.
        </p>
        <ButtonPrimary icon="chevron-right">Discover Symptom Map</ButtonPrimary>
      </Hero>
      <RiskSection>
        <h2>Risk of Misdiagnosis or Delayed Diagnosis</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li className="green">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="blue">Aenean euismod bibendum laoreet</li>
          <li className="red">Proin gravida dolor sit amet lacus accumsan et</li>
          <li className="yellow">Viverra justo commodo proin sodales pulvinar sic tempor</li>
        </ul>
        <ButtonPrimary icon="chevron-right">Explore More HAE Information</ButtonPrimary>
      </RiskSection>
      <PatientExamplesSection
        ctaText={<>Explore More HAE Information</>}
        ctaUrl="/"
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
        <h2>Patient Examples</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </PatientExamplesSection>
      <h2>home page</h2>
    </div>
  );
};

Home.propTypes = {};

export default Home;
