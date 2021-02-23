import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.strong`
  color: ${props => props.theme.redAccent};
  font-weight: 700;
`;

const Accent = ({children, ...props}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Accent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Accent;
