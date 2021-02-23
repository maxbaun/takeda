import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.redDarker};
  color: #fff;
  padding: 2rem 3rem;
  width: 100%;
`;

const UnsupportedBrowser = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

UnsupportedBrowser.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default UnsupportedBrowser;
