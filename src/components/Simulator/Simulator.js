import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import ActionBar from './ActionBar';
import Camera from './Camera';
import Tutorial from './Tutorial';

const View = styled.div`
  position: relative;

  > * {
  }
`;

const Wrapper = styled.div``;

const Simulator = props => {
  const camera = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [tutorialComplete, setTutorialComplete] = useState(false);

  const handleTake = () => {
    const snapshot = camera.current.getScreenshot();
    setImgSrc(snapshot);
  };

  return (
    <Wrapper {...props}>
      <View>
        <Tutorial
          onSkipClick={() => {
            setTutorialComplete(true);
          }}
          style={{display: tutorialComplete ? 'none' : 'block'}}
        />

        <Camera ref={camera} />
      </View>
      <ActionBar isDisabled={!tutorialComplete} onTakeClick={handleTake} />
      <img src={imgSrc} />
    </Wrapper>
  );
};

export default Simulator;
