import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import Icon from '../Icon';
import Media from '../Media';
import EmbededVideo from './EmbededVideo';

const Caption = styled.p`
  bottom: 1.4rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  left: 1.6rem;
  line-height: 1.375;
  margin: 0;
  position: absolute;
`;

const Circle = styled.div`
  background-color: ${props => props.theme[props.color]};
  border-radius: 50%;
  height: ${props => (props.size === 'lg' ? '244px' : props.size === 'md' ? '167px' : null)};
  position: absolute;
  width: ${props => (props.size === 'lg' ? '244px' : props.size === 'md' ? '167px' : null)};
  z-index: -1;

  ${mediaBreakpointUp('lg')} {
    height: ${props => (props.size === 'lg' ? '244px' : props.size === 'md' ? '167px' : null)};
    width: ${props => (props.size === 'lg' ? '244px' : props.size === 'md' ? '167px' : null)};
  }
`;

const CircleBottomLeft = styled(Circle)`
  bottom: ${props => (props.size === 'lg' ? '-64px' : props.size === 'md' ? '-43px' : null)};
  left: ${props => (props.size === 'lg' ? '-49px' : props.size === 'md' ? '-50px' : null)};
`;

const CircleBottomRight = styled(Circle)`
  bottom: ${props => (props.size === 'lg' ? '-64px' : props.size === 'md' ? '-43px' : null)};
  right: ${props => (props.size === 'lg' ? '-49px' : props.size === 'md' ? '-41px' : null)};
`;

const PlayBtn = styled.a`
  align-items: center;
  background-color: ${props => rgba(props.theme.blackPearl, 0.3)};
  border: 1px solid #fff;
  border-radius: 50%;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 100px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s ease-in-out;
  width: 100px;

  &:hover {
    background-color: ${props => rgba(props.theme.blackPearl, 0.5)};
  }

  ${mediaBreakpointUp('lg')} {
    height: ${props => (props.circleSize === 'lg' ? '195px' : props.circleSize === 'md' ? '155px' : '125px')};
    width: ${props => (props.circleSize === 'lg' ? '195px' : props.circleSize === 'md' ? '155px' : '125px')};
  }

  i {
    font-size: 2rem;
    margin: 0 0 8px;
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Video = ({caption, circleColor, circlePosition, circleSize, id, src, thumbnail, thumbnailRatio, ...props}) => {
  const CircleComponent = circlePosition === 'bottom-left' ? CircleBottomLeft : CircleBottomRight;

  useEffect(() => {
    window.jQuery(`.${id}`).modaal(id);
  }, [id]);

  return (
    <Wrapper {...props}>
      <Media ratio={thumbnailRatio}>
        <Thumbnail src={thumbnail} />
      </Media>
      <PlayBtn circleSize={circleSize} className={id} href={`#${id}`}>
        <Icon icon="play" />
        <span>Play</span>
      </PlayBtn>
      <CircleComponent className="circle" color={circleColor} size={circleSize} />
      {caption && <Caption>{caption}</Caption>}
      <div id={id} style={{display: 'none'}}>
        {src ? <EmbededVideo src={src} /> : null}
      </div>
    </Wrapper>
  );
};

Video.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  circleColor: PropTypes.oneOf(['red', 'yellow', 'blue']),
  circlePosition: PropTypes.oneOf(['bottom-left', 'bottom-right']),
  circleSize: PropTypes.oneOf(['md', 'lg']),
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  thumbnailRatio: PropTypes.string
};

Video.defaultProps = {
  circleColor: 'red',
  circlePosition: 'bottom-right',
  circleSize: 'md',
  thumbnailRatio: '21:13'
};

export default Video;
