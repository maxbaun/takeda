import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  backface-visibility: hidden;
  left: 0;
  margin: 0 auto;
  opacity: 0;
  position: absolute;
  right: 0;
  top: ${props => (props.position === 'center' ? `calc(50% - ${props.size / 2}px)` : 0)};
  transform: translate3d(1px, 1px, 1px);
  transition: opacity 0.2s ease-in-out, visibility 0s 0.2s ease-in-out;
  visibility: hidden;
  will-change: visibility, opacity;
  z-index: 10;

  &.loading {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    visibility: visible;
  }
`;

const Loader = ({className, color, loading, position, size, ...props}) => {
  return (
    <Svg
      {...props}
      className={[className, loading ? 'loading' : ''].filter(c => c && c !== '').join(' ')}
      position={position}
      size={size}
      width={size}
      height={size}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </Svg>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  loading: PropTypes.bool,
  position: PropTypes.oneOf(['center', 'top-center']),
  size: PropTypes.number
};

Loader.defaultProps = {
  color: '#fff',
  position: 'center',
  size: 38
};

export default Loader;
