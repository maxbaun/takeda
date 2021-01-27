import * as faceapi from 'face-api.js';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../utils/responsive';
import ActionBar from './ActionBar';
import Camera from './Camera';
import FaceEffect from './FaceEffect';
import Tutorial from './Tutorial';

const Inner = styled.div`
  margin: 0 auto;

  ${mediaBreakpointUp('lg')} {
    max-width: 800px;
  }
`;

const View = styled.div`
  height: 0;
  position: relative;
  padding-bottom: 56.25%;

  > * {
  }
`;

const ViewInner = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.blackPearl};
  box-shadow: -16px 46px 84px 17px rgba(0, 0, 0, 0.13);
`;

const getPaddingBottomPercentage = viewRatio => {
  if (!viewRatio) {
    return '75%';
  }

  const [height, width] = viewRatio.split(':');

  if (!height || !width) {
    return '75%';
  }

  return `${(width / height) * 100}%`;
};

const Simulator = props => {
  const camera = useRef(null);
  // const [imgSrc, setImgSrc] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [tutorialComplete, setTutorialComplete] = useState(false);
  const [mode, setMode] = useState('camera');
  const [snapshot, setSnapshot] = useState(null);
  const [viewRatio, setViewRatio] = useState('4:3');
  const [stream, setStream] = useState(null);
  const [version, setVersion] = useState(0);
  const [videoSize, setVideoSize] = useState(null);

  const _mount = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/weights');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/weights');
    setLoaded(true);
  };

  const handleDownload = () => {
    var link = document.createElement('a');
    link.download = 'filename.png';

    const resultCanvas = document.getElementById('resultCanvas');

    if (!resultCanvas) {
      console.error('Unable to find result canvas');
    }

    link.href = resultCanvas.toDataURL('image/jpg');

    document.body.appendChild(link);
    link.click();
  };

  const handleTake = () => {
    const snapshot = camera.current.getScreenshot();
    setSnapshot(snapshot);
    setRendering(true);
    setMode('result');
  };

  const handleRedo = () => {
    setMode('camera');
    if (version + 1 <= 3) {
      setVersion(version + 1);
    } else {
      setVersion(0);
    }
  };

  useEffect(() => {
    _mount();
  }, []);

  useEffect(() => {
    if (camera && camera.current && camera.current.video) {
      const {videoHeight: height, videoWidth: width} = camera.current.video;

      setVideoSize({height, width});
      setViewRatio(`${width}:${height}`);
    }
  }, [stream]);

  if (!loaded) {
    return null;
  }

  return (
    <Wrapper {...props}>
      <Inner style={{maxWidth: videoSize?.width ? videoSize.width : null}}>
        <View style={{paddingBottom: getPaddingBottomPercentage(viewRatio)}}>
          <ViewInner>
            {rendering ? <h1 style={{position: 'absolute', zIndex: 10}}>loading</h1> : null}
            <Tutorial
              onSkipClick={() => {
                setTutorialComplete(true);
              }}
              style={{display: tutorialComplete ? 'none' : 'block'}}
            />

            <Camera
              onUserMedia={setStream}
              showHelper={tutorialComplete && mode === 'camera'}
              showOverlay={tutorialComplete === false}
              ref={camera}
            />

            {mode === 'result' ? (
              <FaceEffect onComplete={() => setRendering(false)} snapshot={snapshot} version={version} />
            ) : null}
          </ViewInner>
        </View>
      </Inner>
      <ActionBar
        isDisabled={!tutorialComplete}
        mode={mode}
        onDownloadClick={handleDownload}
        onRedoClick={handleRedo}
        onTakeClick={handleTake}
      />
    </Wrapper>
  );
};

export default Simulator;
