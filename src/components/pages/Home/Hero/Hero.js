import PropTypes from 'prop-types';
import React from 'react';
import styled, {keyframes} from 'styled-components';

// import {hexToRgbA} from '../../../../utils/colors';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import Dots from './hero-dots.png';
import DotsMobile from './hero-dots-mobile.png';

const bounceUpAndDown = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`;

const Action = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  min-height: 400px;
  -ms-grid-column: 3;

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
  padding: 60px 1.5rem 80px;
  text-align: right;
  -ms-grid-column: 1;

  ${mediaBreakpointUp('sm')} {
    margin-left: auto;
    margin-right: auto;
    max-width: 625px;
    padding: 14rem 1.5rem 23rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin-right: 0;
    padding: 12rem 1.5rem 15.3rem;
  }

  h1 {
    color: ${props => props.theme.blackPearl};
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0.91;
    margin: 0 0 3rem auto;
    text-transform: uppercase;

    ${mediaBreakpointUp('sm')} {
      font-size: 9rem;
      margin: 0 0 6rem auto;
    }

    ${mediaBreakpointUp('md')} {
      font-size: 10rem;
      max-width: 100%;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 8rem;
      max-width: none;
    }

    ${mediaBreakpointUp('xl')} {
      font-size: 10rem;
      margin: 0 0 3rem auto;
      max-width: 700px;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 1.42;
    margin: 0 0 2.5rem auto;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      margin: 0 0 2.5rem auto;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
      line-height: 1.75;
      margin: 0 0 2.5rem auto;
      max-width: 490px;
    }
  }

  small {
    display: block;

    ${mediaBreakpointUp('lg')} {
      font-size: 1.2rem;
      line-height: 1.67;
      margin-left: auto;
      max-width: 380px;
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
  max-width: 100%;
  width: 320px;

  ${mediaBreakpointUp('sm')} {
    width: 484px;
  }

  ${mediaBreakpointUp('lg')} {
    width: 300px;
  }

  ${mediaBreakpointUp('xl')} {
    width: 390px;
  }

  &::before {
    background-color: ${props => props.theme.red};
    border-radius: 100px;
    content: ' ';
    height: 100%;
    left: -40px;
    max-width: 100%;
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
    letter-spacing: 0.1em;
    max-width: 100%;
    position: relative;
    width: 100%;
    white-space: nowrap;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.4rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
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
  left: -20px;
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
    right: -20px;
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
  font-size: 1.6rem;
  font-weight: 600;
  flex-flow: column nowrap;
  height: 96px;
  left: 0;
  margin: 0 auto;
  padding-top: 25px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 192px;
  z-index: 1;

  ${mediaBreakpointUp('sm')} {
    height: 106px;
    font-size: 1.8rem;
    width: 212px;
  }

  ${mediaBreakpointUp('lg')} {
    height: 96px;
    font-size: 1.4rem;
    width: 192px;
  }

  i {
    bottom: 0.7rem;
    color: ${props => props.theme.red};
    font-size: 1.5em;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    /* transition: transform 0.2s ease-in-out; */
    transform: translate3d(0, 0, 0);
  }

  &:hover {
    span {
      text-decoration: underline;
    }

    i {
      animation: ${bounceUpAndDown} 0.6s ease-in-out infinite;
    }
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const Wrapper = styled.div`
  /* autoprefixer grid: autoplace */
  background-size: 85% auto;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  ${mediaBreakpointUp('sm')} {
    background-image: ${() => `url('${DotsMobile}')`};
    background-position: 80px 100%;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url('${Dots}')`};
    background-position: 110px 0;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr minmax(380px, 45%);
    -ms-grid-columns: 1fr 30px 40%;
  }

  ${mediaBreakpointUp('xl')} {
    background-position: 100% 0;
    grid-gap: 130px;
    grid-template-columns: auto 40%;
    -ms-grid-columns: 1fr 130px 40%;
  }
`;

const Hero = ({children, ctaText, ctaUrl, onScrollToClick: handleScrollToClick, ...props}) => {
  return (
    <Wrapper {...props} className="hero">
      <Content>{children}</Content>
      <Action className="action">
        <Cta>
          <Button href={ctaUrl}>
            <CtaMark />
            {ctaText}
            <CtaMark />
          </Button>
        </Cta>
        <ScrollTo onClick={handleScrollToClick}>
          <span>
            Discover
            <br />
            more below
          </span>
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
