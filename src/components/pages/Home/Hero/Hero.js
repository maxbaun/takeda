import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// import {hexToRgbA} from '../../../../utils/colors';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import Dots from './hero-dots.png';
import DotsMobile from './hero-dots-mobile.png';

const Action = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  min-height: 400px;

  ${mediaBreakpointUp('sm')} {
    min-height: 477px;
  }

  &::before {
    background-color: ${props => props.theme.red};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    mix-blend-mode: multiply;
    z-index: 0;
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 60px 0 80px;
  text-align: right;

  ${mediaBreakpointUp('sm')} {
    margin-left: auto;
    padding: 140px 0 230px;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 210px 0 30px;
    max-width: 515px;
  }

  h1 {
    color: ${props => props.theme.blackPearl};
    font-size: 6rem;
    font-weight: 800;
    line-height: 0.91;
    margin: 0 0 3rem;

    ${mediaBreakpointUp('sm')} {
      font-size: 10rem;
      margin: 0 0 6rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 10rem;
      margin: 0 0 3rem;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 1.42;
    margin: 0 0 4rem auto;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      margin: 0 0 7rem auto;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      line-height: 1.75;
      margin: 0 0 10rem auto;
    }
  }
`;

// const CtaButton = styled(Button)``;

const Cta = styled.div`
  align-items: center;
  border-radius: 70px;
  display: flex;
  height: 112px;
  justify-content: center;
  position: relative;
  width: 390px;

  &::before {
    background-color: ${props => props.theme.red};
    border-radius: 100px;
    content: ' ';
    height: 100%;
    left: -40px;
    position: absolute;
    top: 0;
    z-index: 0;
    width: calc(100% + 80px);
  }

  a {
    align-items: center;
    background-color: #fff;
    border-color: #fff;
    color: rgb(180, 0, 0);
    display: flex;
    font-size: 1.8rem;
    font-weight: 800;
    height: 48px;
    justify-content: center;
    position: relative;
    width: 300px;
    white-space: nowrap;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.4rem;
      width: 484px;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      width: 328px;
    }

    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }
`;

const CtaMark = styled.div`
  height: 77px;
  width: 38.5px;
  border-top-left-radius: 110px;
  border-bottom-left-radius: 110px;
  border: 1px solid #b40000;
  border-right: 0;
  position: absolute;
  left: -12px;
  top: -15px;

  &::before,
  &::after {
    background-color: #b40000;
    border-radius: 50%;
    content: ' ';
    height: 10px;
    left: 38.5px;
    position: absolute;
    width: 10px;
  }

  &::before {
    top: -5px;
  }

  &::after {
    bottom: -5px;
  }

  &:last-child {
    left: auto;
    right: -12px;
    transform: rotate(180deg);
  }
`;

const ScrollTo = styled.button`
  align-items: center;
  background-color: rgb(180, 0, 0);
  border: none;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  flex-flow: column nowrap;
  height: 96px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  width: 192px;
  z-index: 1;

  ${mediaBreakpointUp('sm')} {
    height: 106px;
    font-size: 2rem;
    width: 212px;
  }

  ${mediaBreakpointUp('lg')} {
    height: 96px;
    font-size: 1.4rem;
    width: 192px;
  }

  i {
    bottom: 1rem;
    color: ${props => props.theme.red};
    font-size: 1.5em;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    transform: translate3d(0, 0, 0);
  }

  &:hover {
    i {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url('${DotsMobile}')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url('${Dots}')`};
    background-position: 100% 0;
    display: grid;
    grid-gap: 130px;
    grid-template-columns: auto 40%;
  }
`;

const Hero = ({children, ctaText, ctaUrl, onScrollToClick: handleScrollToClick, ...props}) => {
  return (
    <Wrapper {...props} className="hero">
      <Content>
        <div className="container">{children}</div>
      </Content>
      <Action className="action">
        <Cta>
          <Button href={ctaUrl}>
            <CtaMark />
            {ctaText}
            <CtaMark />
          </Button>
        </Cta>
        <ScrollTo onClick={handleScrollToClick}>
          Explore
          <Icon icon="chevron-down" />
        </ScrollTo>
      </Action>
    </Wrapper>
  );
};

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  ctaText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ctaUrl: PropTypes.string,
  onScrollToClick: PropTypes.func
};

export default Hero;
