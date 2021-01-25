import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 0;
  padding-bottom: ${props => props.padding}%;
  position: relative;

  > * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Media = ({children, ratio, ...props}) => {
  const [width, height] = ratio?.split(':');

  if (!width || !height) {
    throw new Error('Ratio needs to be in X:Y format.');
  }

  return (
    <Wrapper {...props} padding={(height / width) * 100}>
      {children}
    </Wrapper>
  );
};

Media.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  ratio: PropTypes.string.isRequired
};

Media.defaultProps = {
  ratio: '16:9'
};

export default Media;
