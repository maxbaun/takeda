import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import VideoSection from '../../../shared/VideoSection/VideoSection';
import imgDotPattern from './dot-pattern-about-hae-hero.png';

// import {mediaBreakpointUp} from '../../../../utils/responsive';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1608px;
  padding: 0 1.5rem;
`;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  padding: 0 0 5rem;

  ${mediaBreakpointUp('lg')} {
    padding: 0 0 11.2rem;
  }

  .circle {
    ${mediaBreakpointUp('lg')} {
      bottom: -30px;
      right: -20px;
    }

    ${mediaBreakpointUp('xl')} {
      bottom: -64px;
      right: -49px;
    }
  }
`;

const Hero = ({children, media, title, ...props}) => {
  return (
    <Wrapper {...props}>
      <Container>
        <VideoSection media={title} />
        <VideoSection media={media}>{children}</VideoSection>
      </Container>
    </Wrapper>
  );
};

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  media: PropTypes.node,
  title: PropTypes.node
};

export default Hero;
