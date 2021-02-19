import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button.attrs({type: 'button'})``;

const DropdownToggle = ({buttonId, children, isOpen, onToggleClick: handleToggleClick, ...props}) => {
  return (
    <Wrapper {...props} aria-haspopup="true" aria-expanded={isOpen} id={buttonId} onClick={handleToggleClick}>
      {children}
    </Wrapper>
  );
};

DropdownToggle.propTypes = {
  buttonId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  isOpen: PropTypes.bool,
  onToggleClick: PropTypes.func
};

DropdownToggle.defaultProps = {
  buttonId: 'dropdownToggle'
};

export default DropdownToggle;
