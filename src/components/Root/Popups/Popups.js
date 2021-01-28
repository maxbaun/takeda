import React, {useContext} from 'react';
import styled from 'styled-components';

import Context from '../../../context';
import {mediaBreakpointUp} from '../../../utils/responsive';
import CancelConfirm from '../../shared/CancelConfirm';
import Popup from '../../shared/Popup';

const NoWebcamTitle = styled.div`
  ${mediaBreakpointUp('lg')} {
    margin-left: auto;
    max-width: 210px;
  }
`;

const Popups = () => {
  const {popups, closePopup} = useContext(Context);

  return (
    <>
      <Popup isOpen={popups.leaving.open} title={<h2>You are now leaving HAEvirtualLab.com</h2>}>
        <CancelConfirm
          confirmProps={{href: popups.leaving.data?.href || null, external: true}}
          onCancel={e => {
            e.preventDefault();
            closePopup('leaving');
          }}
        >
          <p>
            We do not review or control the content of external websites and this hyperlink does not constitute an
            endorsement of the site’s content.{' '}
          </p>
        </CancelConfirm>
      </Popup>
      <Popup
        isOpen={popups.noCamera.open}
        onClose={() => closePopup('noCamera')}
        title={
          <NoWebcamTitle>
            <h2>
              No webcam
              <br />
              detected.
            </h2>
            <p>Please install a webcam to use this tool. Or scan the QR code to use on amobile device.</p>
          </NoWebcamTitle>
        }
      >
        <img src={`${process.env.PUBLIC_URL}/img/qrcode.png`} style={{maxWidth: 230}} />
      </Popup>
    </>
  );
};

export default Popups;
