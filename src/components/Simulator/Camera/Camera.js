import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Helper = styled.div`
  border: 1px solid #fff;
  box-shadow: 0px 0px 0px 999px ${props => rgba(props.theme.blackPearl, 0.8)};
  height: 84%;
  left: 25%;
  position: absolute;
  top: 5%;
  width: 50%;
  z-index: 1;
`;

const HelperNote = styled.p`
  color: #fff;
  font-size: 1.4rem;
  font-style: italic;
  left: 0;
  margin: 0 auto;
  padding: 0 1rem;
  position: absolute;
  text-align: center;
  top: calc(84% + 28px);
  right: 0;
  width: 100%;
  z-index: 1;

  ${mediaBreakpointUp(400)} {
    top: calc(84% + 34px);
  }

  ${mediaBreakpointUp('sm')} {
    top: calc(84% + 52px);
  }

  ${mediaBreakpointUp('lg')} {
    top: calc(84% + 45px);
  }
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
  overflow: hidden;

  video {
    display: block;
    height: 100%;
    margin: 0 auto;
    width: 100%;
  }
`;

const Overlay = styled.div`
  background-color: ${props => rgba(props.theme.blackPearl, 0.8)};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const Camera = forwardRef(({onUserMedia, onUserMediaError, showHelper, showOverlay, ...props}, ref) => {
  return (
    <Wrapper {...props}>
      <Inner>
        <Webcam onUserMedia={onUserMedia} onUserMediaError={onUserMediaError} ref={ref} />
        {showHelper ? (
          <>
            <Helper />
          </>
        ) : null}
        {showOverlay ? <Overlay /> : null}
      </Inner>
      {showHelper ? (
        <>
          <HelperNote>Please have your face fill up as much of this rectangle as possible</HelperNote>
        </>
      ) : null}
    </Wrapper>
  );
});

Camera.displayName = 'Camera';

Camera.propTypes = {
  onUserMedia: PropTypes.func,
  onUserMediaError: PropTypes.func,
  showHelper: PropTypes.bool,
  showOverlay: PropTypes.bool
};

export default Camera;
