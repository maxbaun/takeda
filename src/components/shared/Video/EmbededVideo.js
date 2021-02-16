import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Media from '../Media';

const Wrapper = styled(Media)``;

const EmbededVideo = ({src, ...props}) => {
  return (
    <Wrapper {...props} ratio="16:9">
      {src ? (
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
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
