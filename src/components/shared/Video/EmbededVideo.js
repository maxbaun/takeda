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
