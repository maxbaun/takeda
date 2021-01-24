import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';

const Content = styled.div`
  order: 0;

  ${mediaBreakpointUp('lg')} {
    max-width: 360px;
    order: 1;
  }

  h2 {
    margin: 0 0 3rem;
  }
`;

const Icon = styled.div`
  margin: 0;
  text-align: center;

  p {
    color: ${props => props.theme.blue};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.38;
    margin: 0;
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
  order: 1;

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 5rem;
    grid-row-gap: 3rem;
    order: 0;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-row-gap: 4rem;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    grid-column-gap: 100px;
    grid-template-columns: 25% auto;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 200px;
    grid-template-columns: 400px auto;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.solitude};
  padding: 7rem 0 8rem;

  ${mediaBreakpointUp('lg')} {
    padding: 11rem 0 12rem;
  }
`;

const CommonTriggers = ({children, icons, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>
          <IconList>
            {icons &&
              icons.map((icon, index) => (
                <Icon color={icon.color} key={index}>
                  <Icon__Image>
                    <img src={icon.image} />
                  </Icon__Image>
                  <p>{icon.caption}</p>
                </Icon>
              ))}
          </IconList>
          <Content>{children}</Content>
        </Inner>
      </div>
    </Wrapper>
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
