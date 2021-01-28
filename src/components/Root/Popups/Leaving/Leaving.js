import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import CancelConfirm from '../../../shared/CancelConfirm';
import Popup from '../../../shared/Popup';

const PopupContent = styled(Popup.Content)`
  ${mediaBreakpointUp('lg')} {
    max-width: 320px;
  }
`;

const PopupGrid = styled(Popup.Grid)`
  ${mediaBreakpointUp('lg')} {
    max-width: 800px;
  }
`;

const Leaving = ({confirmProps, onCancel: handleClose}) => {
  return (
    <PopupGrid>
      <Popup.Title>
        <h2>You are now leaving HAEvirtualLab.com</h2>
      </Popup.Title>
      <PopupContent>
        <CancelConfirm confirmProps={confirmProps} onCancel={handleClose}>
          <p>
            We do not review or control the content of external websites and this hyperlink does not constitute an
            endorsement of the site’s content.{' '}
          </p>
        </CancelConfirm>
      </PopupContent>
    </PopupGrid>
  );
};

Leaving.propTypes = {
  confirmProps: PropTypes.object,
  onCancel: PropTypes.func
};

Leaving.defaultProps = {
  confirmProps: {}
};

export default Leaving;
