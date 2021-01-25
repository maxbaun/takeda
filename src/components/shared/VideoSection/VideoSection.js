import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Content = styled.div`
  order: 1;

  ${mediaBreakpointUp('lg')} {
    order: initial;
  }

  h2 {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 4rem;
    }
  }

  p {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 2rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    grid-column-gap: 50px;
    grid-template-columns: ${props => (props.size === 'normal' ? '54% auto' : '40% auto')};
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 100px;
  }
`;

const GridMediaRight = styled(Grid)`
  ${mediaBreakpointUp('lg')} {
    grid-template-columns: ${props => (props.size === 'normal' ? 'auto 54%' : 'auto 40%')};
  }
`;

const VideoWrap = styled.div`
  order: 0;

  ${mediaBreakpointUp('lg')} {
    order: initial;
  }
`;

const Wrapper = styled.div``;

const VideoSection = ({children, media, mediaLeft, size, ...props}) => {
  const GridVariation = mediaLeft ? Grid : GridMediaRight;

  return (
    <Wrapper {...props}>
      <GridVariation size={size}>
        {mediaLeft ? (
          <>
            <VideoWrap>{media}</VideoWrap>
            {children}
          </>
        ) : (
          <>
            {children}
            <VideoWrap>{media}</VideoWrap>
          </>
        )}
      </GridVariation>
    </Wrapper>
  );
};

VideoSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  media: PropTypes.node,
  mediaLeft: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'large'])
};

VideoSection.defaultProps = {
  size: 'normal',
  mediaLeft: true
};

VideoSection.Content = Content;

export default VideoSection;