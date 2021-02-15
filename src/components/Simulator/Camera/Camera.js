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

const HelperNote = styled.div`
  bottom: 1rem;
  color: #fff;
  font-size: 1.4rem;
  font-style: italic;
  left: 0;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  right: 0;
  z-index: 1;

  ${mediaBreakpointUp('sm')} {
    bottom: 3rem;
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
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 100%;

  video {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

const Camera = forwardRef(({onUserMedia, onUserMediaError, showHelper, showOverlay, ...props}, ref) => {
  return (
    <Wrapper {...props}>
      <Webcam onUserMedia={onUserMedia} onUserMediaError={onUserMediaError} ref={ref} />
      {showHelper ? (
        <>
          <Helper />
          <HelperNote>Please have your face fill up as much of this rectangle as possible</HelperNote>
        </>
      ) : null}
      {showOverlay ? <Overlay /> : null}
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
