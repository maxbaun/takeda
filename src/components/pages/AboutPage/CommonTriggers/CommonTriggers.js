import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Content = styled.div`
  /* opacity: ${props => (props.inView ? 1 : 0)}; */
  order: 0;
  /* transform: ${props => (props.inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 10vh, 0)')}; */
  /* transition: opacity 0.4s ease-out, transform 0.8s ease-out; */
  /* visibility: ${props => (props.inView ? 'visible' : 'hidden')}; */
  /* will-change: opacity, visibility; */
  -ms-grid-column: 3;

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    max-width: 360px;
    order: 1;
  }

  h2 {
    margin: 0 0 3rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 3.6rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 3rem;
    }
  }
`;

const Icon = styled.div`
  margin: 0;
  opacity: ${props => (props.inView ? 1 : 0)};
  text-align: center;
  transform: ${props => (props.inView ? 'scale(1)' : 'scale(0.5)')};
  transition: all 0.4s ease-in-out;

  p {
    color: ${props => props.theme.blue};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.7rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.38;
    }
  }
`;

const Icon__Image = styled.div`
  border: 2px solid ${props => props.theme[props.color]};
  border-radius: 50%;
  height: 0;
  margin: 0 0 2rem;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  width: 100%;

  img {
    left: 0;
    margin: 0 auto;
    max-height: 70%;
    max-width: 60%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const IconList = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 50%));
  -ms-grid-columns: minmax(0, 50%) 30px minmax(0, 50%);
  -ms-grid-rows: 1fr 20px 1fr 20px 1fr;
  order: 1;
  -ms-grid-column: 1;

  ${mediaBreakpointUp('sm')} {
    grid-column-gap: 8rem;
    grid-row-gap: 5.1rem;
    -ms-grid-rows: 1fr 50px 1fr 50px 1fr;
  }

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 5rem;
    grid-row-gap: 3rem;
    order: 0;
    -ms-grid-rows: 1fr 30px 1fr 30px 1fr;
  }

  > * {
    &:nth-child(even) {
      -ms-grid-column: 3;
    }
    &:nth-child(odd) {
      -ms-grid-column: 1;
    }
    &:nth-child(1),
    &:nth-child(2) {
      -ms-grid-row: 1;
    }
    &:nth-child(3),
    &:nth-child(4) {
      -ms-grid-row: 3;
    }
    &:nth-child(5),
    &:nth-child(6) {
      -ms-grid-row: 5;
    }
  }
`;

const Inner = styled.div`
  display: grid;
  grid-row-gap: 4rem;

  ${mediaBreakpointUp('sm')} {
    grid-row-gap: 10.4rem;
  }

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    grid-column-gap: 100px;
    grid-template-columns: auto 50%;
    -ms-grid-columns: 1fr 100px 50%;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 200px;
    grid-template-columns: auto 50%;
    -ms-grid-columns: 1fr 200px 50%;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.solitude};
  padding: 7rem 0 8rem;

  ${mediaBreakpointUp('sm')} {
    padding: 12rem 0 24.3rem;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 11rem 0 12rem;
  }
`;

const CommonTriggers = ({children, icons, ...props}) => {
  const [inView, setInView] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setOffset(ref.current.offsetHeight / 2);
      }
    };

    handleResize();

    document.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VisibilitySensor partialVisibility active={!inView} onChange={setInView} minTopValue={offset}>
      <Wrapper {...props} ref={ref}>
        <div className="container">
          <Inner>
            <IconList>
              {icons &&
                icons.map((icon, index) => (
                  <Icon inView={inView} key={index} style={{transitionDelay: `${index * 200 + 800}ms`}}>
                    <Icon__Image color={icon.color}>
                      <img src={icon.image} />
                    </Icon__Image>
                    <p>{icon.caption}</p>
                  </Icon>
                ))}
            </IconList>
            <Content inView={inView}>{children}</Content>
          </Inner>
        </div>
      </Wrapper>
    </VisibilitySensor>
  );
};

CommonTriggers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      color: PropTypes.oneOf(['green', 'blue']),
      image: PropTypes.string
    })
  )
};

export default CommonTriggers;
