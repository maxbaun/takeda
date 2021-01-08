import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// import {hexToRgbA} from '../../../../utils/colors';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import Dots from './hero-dots.png';

const Action = styled.div`
  align-items: center;
  background-color: rgb(231, 19, 26);
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  max-width: 490px;

  ${mediaBreakpointUp('md')} {
    margin-left: auto;
    text-align: right;
  }

  ${mediaBreakpointUp('lg')} {
    padding: 210px 0 30px;
  }

  h1 {
    color: ${props => props.theme.blackPearl};
    font-weight: 800;
    margin: 0 0 3rem;

    ${mediaBreakpointUp('lg')} {
      font-size: 10rem;
      line-height: 0.91;
      margin: 0 0 3rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.75;

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 10rem auto;
    }
  }
`;

// const CtaButton = styled(Button)``;

const Cta = styled.div`
  align-items: center;
  background-color: ${props => props.theme.red};
  border-radius: 70px;
  display: flex;
  height: 112px;
  justify-content: center;
  position: relative;
  width: 390px;

  a {
    align-items: center;
    background-color: #fff;
    border-color: #fff;
    color: rgb(180, 0, 0);
    display: flex;
    font-size: 1.6rem;
    font-weight: 800;
    height: 48px;
    justify-content: center;
    width: 328px;

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
  border: 1px solid #000;
  border-right: 0;
  position: absolute;
  left: 16px;

  &::before,
  &::after {
    background-color: #000;
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
    right: 16px;
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
  font-size: 1.4rem;
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
  background-image: ${() => `url('${Dots}')`};
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0;

  ${mediaBreakpointUp('lg')} {
    display: grid;
    height: 686px;
    grid-gap: 130px;
    grid-template-columns: auto 40%;
  }
`;

const Hero = ({children, ctaText, ctaUrl, ...props}) => {
  return (
    <Wrapper {...props} className="hero">
      <Content>
        <div className="container">{children}</div>
      </Content>
      <Action className="action">
        <Cta>
          <CtaMark />
          <Button as={Link} to={ctaUrl}>
            {ctaText}
          </Button>
          <CtaMark />
        </Cta>
        <ScrollTo>
          Explore
          <Icon icon="chevron-down" />
        </ScrollTo>
      </Action>
    </Wrapper>
  );
};

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  ctaText: PropTypes.oneOfType([PropTypes.text, PropTypes.node]),
  ctaUrl: PropTypes.string
};

export default Hero;
