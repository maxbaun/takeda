import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Parallax} from 'react-parallax';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import Icon from '../Icon';
import Media from '../Media';
import Modal from '../Modal';
import EmbededVideo from './EmbededVideo';

const Caption = styled.p`
  bottom: 1.4rem;
  color: #fff;
  font-weight: 600;
  left: 1.6rem;
  line-height: 1.375;
  margin: 0;
  min-height: 40px;
  position: absolute;
  z-index: 1;

  ${mediaBreakpointUp('sm')} {
    font-size: 1.8rem;
  }
  ${mediaBreakpointUp('lg')} {
    font-size: 1.6rem;
  }
`;

const Circle = styled.div`
  background-color: ${props => props.theme[props.color]};
  border-radius: 50%;
  height: ${props => (props.size === 'lg' ? '98px' : props.size === 'md' ? '98px' : null)};
  position: absolute;
  width: ${props => (props.size === 'lg' ? '98px' : props.size === 'md' ? '98px' : null)};
  z-index: -1;

  ${mediaBreakpointUp('sm')} {
    height: ${props => (props.size === 'lg' ? '171px' : props.size === 'md' ? '171px' : null)};
    width: ${props => (props.size === 'lg' ? '171px' : props.size === 'md' ? '171px' : null)};
  }

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

const Overlay = styled.div`
  background: linear-gradient(to bottom, rgba(60, 60, 60, 0), #000);
  height: 50%;
  left: 0;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 0;
`;

const Disclaimer = styled.p`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0;
`;

const PlayBtn = styled.button`
  align-items: center;
  background-color: ${props => rgba(props.theme.blackPearl, 0.3)};
  border: 1px solid #fff;
  border-radius: 50%;
  bottom: 0;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  height: 80px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s ease-in-out;
  width: 80px;
  z-index: 1;

  &:hover {
    background-color: ${props => rgba(props.theme.blackPearl, 0.5)};

    span {
      text-decoration: underline;
    }
  }

  ${mediaBreakpointUp('sm')} {
    height: 137px;
    width: 137px;
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

const Video = ({
  caption,
  circleColor,
  circlePosition,
  circleSize,
  disclaimer,
  id,
  src,
  thumbnail,
  thumbnailRatio,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CircleComponent = circlePosition === 'bottom-left' ? CircleBottomLeft : CircleBottomRight;

  useEffect(() => {
    // window.jQuery(`.${id}`).modaal(id);
  }, [id]);

  return (
    <Wrapper {...props}>
      <Media ratio={thumbnailRatio}>
        <Thumbnail src={thumbnail} />
      </Media>
      <PlayBtn
        circleSize={circleSize}
        // href={`#${id}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Icon icon="play" />
        <span>Play</span>
      </PlayBtn>
      <Parallax
        renderLayer={percentage => (
          <CircleComponent
            className="circle"
            color={circleColor}
            size={circleSize}
            style={{transform: `translate3d(0, ${percentage * -100}%, 0)`}}
          />
        )}
        style={{overflow: 'visible'}}
      />
      <Overlay />
      {caption && <Caption>{caption}</Caption>}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {src ? <EmbededVideo src={src} /> : null}
        {disclaimer ? <Disclaimer>{disclaimer}</Disclaimer> : null}
      </Modal>
    </Wrapper>
  );
};

Video.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  circleColor: PropTypes.oneOf(['red', 'yellow', 'blue']),
  circlePosition: PropTypes.oneOf(['bottom-left', 'bottom-right']),
  circleSize: PropTypes.oneOf(['md', 'lg']),
  disclaimer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
