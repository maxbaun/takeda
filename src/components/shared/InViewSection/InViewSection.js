import PropTypes from 'prop-types';
import React, {cloneElement, useEffect, useRef, useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

const Wrapper = styled.div`
  .fade-in-content {
    opacity: 0;
    transition: opacity 0.4s ease-out, transform 0.8s ease-out;
    visibility: hidden;
    will-change: opacity, visibility;

    &.right {
      transform: translate3d(10%, 0, 0);
    }

    &.left {
      transform: translate3d(-10%, 0, 0);
    }

    &.bottom {
      transform: translate3d(0, 10%, 0);
    }
  }

  .fade-in-media {
    opacity: 0;
    transition: opacity 0.4s 0.5s ease-out, transform 0.8s 0.5s ease-out;
    visibility: hidden;
    will-change: opacity, visibility;

    &.bottom {
      transform: translate3d(0, 10%, 0);
    }
  }

  &.in-view {
    .fade-in-content {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
    .fade-in-media {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
  }
`;

const InViewSection = ({children, ...props}) => {
  const [inView, setInView] = useState(false);
  const [offset, setOffset] = useState(400);
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setOffset(ref.current.offsetHeight / 3);
      }
    };

    handleResize();

    document.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VisibilitySensor
      partialVisibility
      active={!inView || offset === 0}
      onChange={setInView}
      minTopValue={offset}
      {...props}
    >
      <Wrapper className={[inView ? 'in-view' : ''].join(' ')} ref={ref}>
        {cloneElement(children, {})}
      </Wrapper>
    </VisibilitySensor>
  );
};

InViewSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default InViewSection;
