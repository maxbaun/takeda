import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import _VideoSection from '../../../shared/VideoSection/VideoSection';
import imgDotPattern from './dot-pattern-about-hae-hero.png';
import imgDotPatternMobile from './dot-pattern-about-hae-hero-mobile.png';

// import {mediaBreakpointUp} from '../../../../utils/responsive';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  ${mediaBreakpointUp('lg')} {
    max-width: none;
  }

  ${mediaBreakpointUp('xl')} {
    max-width: 1608px;
  }
`;

const Content = styled.div`
  /* margin: 2rem 0 0;

  ${mediaBreakpointUp('sm')} {
    margin: 6.3rem 0 0;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
  } */
`;

const VideoSection = styled(_VideoSection)``;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPatternMobile})`};
  background-position: left -30px top -60px;
  background-repeat: no-repeat;
  padding: 0 0 5rem;

  ${mediaBreakpointUp('sm')} {
    background-position: 0 0;
    padding: 0 0 12.3rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url(${imgDotPattern})`};
    background-position: 0 0;
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
      <Container className="container">
        <VideoSection media={title} size="large" />
        <VideoSection media={media} size="large">
          <Content>{children}</Content>
        </VideoSection>
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
