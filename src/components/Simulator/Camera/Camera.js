import React, {forwardRef} from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  video {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

const Camera = forwardRef((props, ref) => {
  return (
    <Wrapper {...props}>
      <Webcam ref={ref} />
    </Wrapper>
  );
});

Camera.displayName = 'Camera';

export default Camera;
