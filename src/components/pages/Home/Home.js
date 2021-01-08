import React from 'react';

import {ButtonPrimary} from '../../shared/Button';
// import PropTypes from 'prop-types'
import Hero from './Hero';

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
      <h2>home page</h2>
    </div>
  );
};

Home.propTypes = {};

export default Home;
