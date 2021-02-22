import React from 'react';

import imgStep1 from './step-1.png';
import imgStep2 from './step-2.png';
import imgStep3 from './step-3.png';

const steps = [
  {
    image: imgStep1,
    text: (
      <p>
        Make sure you are facing forward to the camera. Have your face fill up as much of the rectangle as possible.
      </p>
    )
  },
  {
    image: imgStep2,
    text: (
      <p>
        Make sure {`you're`} in a spot with good lighting, no glare and the background {"shouldn't"} be too busy.
      </p>
    )
  },
  {
    image: imgStep3,
    text: <p>Remove glasses and maintain a straight face. Do not smile or show teeth.</p>
  }
];

export default steps;
