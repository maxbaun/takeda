import * as faceapi from 'face-api.js';
import PropTypes from 'prop-types';
import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import Context from '../../context';
import {mediaBreakpointUp} from '../../utils/responsive';
import Loader from '../shared/Loader';
import ActionBar from './ActionBar';
import Camera from './Camera';
import FaceEffect from './FaceEffect';
import LearnMore from './LearnMore';
import Tutorial from './Tutorial';

const Inner = styled.div`
  margin: 0 auto;
  padding: 50px 0;

  ${mediaBreakpointUp('sm')} {
    padding: 75px 0;
  }

  ${mediaBreakpointUp('md')} {
    padding: 0;
  }

  ${mediaBreakpointUp('lg')} {
    max-width: 800px;
  }
`;

const LearnMoreDesktop = styled.div`
  display: none;

  ${mediaBreakpointUp('lg')} {
    display: block;
  }
`;

const LearnMoreMobile = styled.div`
  margin: 4.5rem 0 0;

  ${mediaBreakpointUp('lg')} {
    display: none;
    margin: 9.2rem 0 0;
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
  position: relative;

  ${mediaBreakpointUp('lg')} {
    box-shadow: -16px 46px 84px 17px rgba(0, 0, 0, 0.13);
  }
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

const Simulator = ({onShowReferences: handleShowReferences, ...props}) => {
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
  const [downloadUrl, setDownloadUrl] = useState(null);
  const {openPopup} = useContext(Context);
  const [activeInfoIndex, setActiveInfoIndex] = useState(-1);

  const _mount = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/weights');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/weights');
    setLoaded(true);
  };

  const handleDownload = () => {
    var link = document.createElement('a');
    link.download = 'hae-simulator-result.png';

    const resultCanvas = document.getElementById('resultCanvas');

    if (!resultCanvas) {
      console.error('Unable to find result canvas');
    }

    link.href = downloadUrl;

    document.body.appendChild(link);
    link.click();
  };

  const handleTake = () => {
    setRendering(true);
    const snapshot = camera.current.getScreenshot();
    setSnapshot(snapshot);
    setMode('result');
  };

  const handleRedo = () => {
    setMode('camera');
    setDownloadUrl(null);
    if (version + 1 <= 3) {
      setVersion(version + 1);
    } else {
      setVersion(0);
    }
  };

  const handleCameraError = () => {
    openPopup('noCamera');
  };

  useEffect(() => {
    _mount();
  }, []);

  useEffect(() => {
    if (camera && camera.current && camera.current.video) {
      const {offsetHeight, offsetWidth, videoHeight, videoWidth} = camera.current.video;

      const height = videoHeight || offsetHeight;
      const width = videoWidth || offsetWidth;

      setVideoSize({height, width});
      setViewRatio(`${width}:${height}`);
    }
  }, [stream]);

  useEffect(() => {
    if (mode === 'result' && activeInfoIndex > -1) {
      handleShowReferences(true);
    } else {
      handleShowReferences(false);
    }
  }, [mode, activeInfoIndex]);

  if (!loaded) {
    return null;
  }

  const elLearnMore = <LearnMore activeIndex={activeInfoIndex} onActiveIndexChange={setActiveInfoIndex} />;

  return (
    <Wrapper {...props}>
      <Tutorial
        onComplete={() => {
          setTutorialComplete(true);
        }}
        style={{display: tutorialComplete ? 'none' : 'block'}}
      />
      <Inner style={{maxWidth: videoSize?.width ? videoSize.width : null}}>
        <View style={{paddingBottom: getPaddingBottomPercentage(viewRatio)}}>
          <ViewInner>
            <Loader loading={rendering} />

            <Camera
              onUserMedia={setStream}
              onUserMediaError={handleCameraError}
              showHelper={tutorialComplete && mode === 'camera'}
              // showOverlay={tutorialComplete === false}
              ref={camera}
            />

            {mode === 'result' ? (
              <FaceEffect
                height={videoSize?.height}
                onComplete={url => {
                  setRendering(false);
                  setDownloadUrl(url);
                }}
                snapshot={snapshot}
                version={version}
                width={videoSize?.width}
              />
            ) : null}
          </ViewInner>
        </View>
      </Inner>
      {mode === 'result' ? <LearnMoreDesktop>{elLearnMore}</LearnMoreDesktop> : null}
      <ActionBar
        canDownload={Boolean(downloadUrl)}
        isDisabled={!tutorialComplete}
        mode={mode}
        onDownloadClick={handleDownload}
        onRedoClick={handleRedo}
        onTakeClick={handleTake}
      >
        {mode === 'result' ? <LearnMoreMobile>{elLearnMore}</LearnMoreMobile> : null}
      </ActionBar>
    </Wrapper>
  );
};

Simulator.propTypes = {
  onShowReferences: PropTypes.func
};

export default Simulator;
