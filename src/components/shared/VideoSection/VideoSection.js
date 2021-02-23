import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Content = styled.div`
  margin: 3rem 0 0;
  order: 1;

  ${mediaBreakpointUp('sm')} {
    margin: 7.8rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    order: initial;
  }

  h2 {
    margin-top: 0;

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

const ContentWrap = styled.div``;

const VideoWrap = styled.div`
  order: 0;

  ${mediaBreakpointUp('lg')} {
    order: initial;
  }
`;

const Grid = styled.div`
  display: grid;
  -ms-grid-columns: ${props => (props.size === 'normal' ? '50% 50px 1fr' : '60% 50px 1fr')};

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    grid-column-gap: 50px;
    grid-template-columns: ${props => (props.size === 'normal' ? '50% auto' : '60% auto')};
    -ms-grid-columns: ${props => (props.size === 'normal' ? '50% 50px 1fr' : '60% 50px 1fr')};
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 100px;
  }

  ${ContentWrap} {
    -ms-grid-column: 3;
  }

  ${VideoWrap} {
    -ms-grid-column: 1;
  }
`;

const GridMediaRight = styled(Grid)`
  -ms-grid-columns: ${props => (props.size === 'normal' ? '1fr 50px 50%' : '1fr 50px 60%')};

  ${mediaBreakpointUp('lg')} {
    grid-template-columns: ${props => (props.size === 'normal' ? 'auto 50%' : 'auto 60%')};
    -ms-grid-columns: ${props => (props.size === 'normal' ? '1fr 50px 50%' : '1fr 50px 60%')};
  }

  ${ContentWrap} {
    -ms-grid-column: 1;
  }

  ${VideoWrap} {
    -ms-grid-column: 3;
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
            <ContentWrap>{children}</ContentWrap>
          </>
        ) : (
          <>
            <ContentWrap>{children}</ContentWrap>
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
