import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import styled from 'styled-components';

import Context from '../../../../context';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import _CancelConfirm from '../../../shared/CancelConfirm';
import Popup from '../../../shared/Popup';

const CancelConfirm = styled(_CancelConfirm)`
  p {
    margin: 0 0 3rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 5rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 2rem;
    }
  }
`;

const PopupContent = styled(Popup.Content)`
  ${mediaBreakpointUp('lg')} {
    max-width: 320px;
  }

  a,
  button {
    margin: 0 1.5rem 1rem 0;
  }
`;

const PopupGrid = styled(Popup.Grid)`
  ${mediaBreakpointUp('lg')} {
    max-width: 800px;
  }
`;

const Leaving = ({confirmProps, onCancel: handleClose}) => {
  const {isAuthorized} = useContext(Context);

  return (
    <PopupGrid>
      <Popup.Title>
        <h2>You are now leaving HAEvirtualLab.com</h2>
      </Popup.Title>
      <PopupContent>
        <CancelConfirm confirmProps={confirmProps} onCancel={isAuthorized ? handleClose : null} onConfirm={handleClose}>
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
