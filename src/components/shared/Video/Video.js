import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import Icon from '../Icon';

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
  border: none;
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
    height: 195px;
    width: 195px;
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

const Video = ({circleColor, circlePosition, circleSize, id, thumbnail, ...props}) => {
  const CircleComponent = circlePosition === 'bottom-left' ? CircleBottomLeft : CircleBottomRight;

  useEffect(() => {
    window.jQuery(`.${id}`).modaal(id);
  }, [id]);

  return (
    <Wrapper {...props}>
      <Thumbnail src={thumbnail} />
      <PlayBtn className={id} href={`#${id}`}>
        <Icon icon="play" />
        <span>Play</span>
      </PlayBtn>
      <CircleComponent className="circle" color={circleColor} size={circleSize} />
      <div id={id} style={{display: 'none'}}>
        modal
      </div>
    </Wrapper>
  );
};

Video.propTypes = {
  circleColor: PropTypes.oneOf(['red', 'yellow', 'blue']),
  circlePosition: PropTypes.oneOf(['bottom-left', 'bottom-right']),
  circleSize: PropTypes.oneOf(['md', 'lg']),
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
};

Video.defaultProps = {
  circleColor: 'red',
  circlePosition: 'bottom-right',
  circleSize: 'md'
};

export default Video;
