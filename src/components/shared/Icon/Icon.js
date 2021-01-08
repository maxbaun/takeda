import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.i``;

const Icon = ({className, icon, ...props}) => {
  if (!icon) {
    return null;
  }

  const classList = [className, `icon-${icon}`].filter(c => c && c !== '');

  return <Wrapper className={classList.join(' ')} {...props} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string
};

export default Icon;
