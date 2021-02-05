import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import Popup from '../../../shared/Popup';

const PopupContent__NoCam = styled(Popup.Content)`
  img {
    max-width: 230px;
  }
`;

const PopupTitle__NoCam = styled(Popup.Title)`
  ${mediaBreakpointUp('lg')} {
    margin-left: auto;
    max-width: 210px;
  }
`;

const NoCamera = () => {
  return (
    <Popup.Grid>
      <PopupTitle__NoCam>
        <h2>
          No webcam
          <br />
          detected.
        </h2>
        <p>Please install a webcam to use this tool. Or scan the QR code to use on a mobile device.</p>
      </PopupTitle__NoCam>
      <PopupContent__NoCam>
        <img src={`${process.env.PUBLIC_URL}/img/qrcode.png`} />
      </PopupContent__NoCam>
    </Popup.Grid>
  );
};

NoCamera.propTypes = {};

export default NoCamera;
