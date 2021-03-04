import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {ButtonBlue, ButtonGray} from '../Button';

const Buttons = styled.div`
  a,
  button {
    margin-right: 2rem;
  }
`;

const Wrapper = styled.div`
  p {
    margin: 0 0 3rem;
  }
`;

const CancelConfirm = ({
  children,
  cancelProps,
  confirmProps,
  onCancel: handleCancel,
  onConfirm: handleConfirm,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {children}
      <Buttons>
        <ButtonBlue {...confirmProps} onClick={handleConfirm}>
          OK
        </ButtonBlue>
        {handleCancel ? (
          <ButtonGray {...cancelProps} onClick={handleCancel}>
            Cancel
          </ButtonGray>
        ) : null}
      </Buttons>
    </Wrapper>
  );
};

CancelConfirm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  cancelProps: PropTypes.object,
  confirmProps: PropTypes.object,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

CancelConfirm.defaultProps = {
  cancelProps: {},
  confirmProps: {}
};

export default CancelConfirm;
