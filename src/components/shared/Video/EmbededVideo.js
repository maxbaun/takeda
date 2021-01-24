import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const EmbededVideo = ({src, ...props}) => {
  return (
    <Wrapper {...props}>
      {src ? (
        <iframe
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={src}
        />
      ) : null}
    </Wrapper>
  );
};

EmbededVideo.propTypes = {
  src: PropTypes.string
};

export default EmbededVideo;
