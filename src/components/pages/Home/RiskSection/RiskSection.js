import PropTypes from 'prop-types';
import React from 'react';
import styled, {keyframes} from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import imgBodyCircle from './body-circle.png';
import imgBodyDots from './body-dots.png';
import Dots from './dot-pattern-risk-of-misdiagnosis.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Content = styled.div`
  margin: 0 0 5rem;
  order: 0;
  position: relative;

  ${mediaBreakpointUp('md')} {
    margin: 0 0 10rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    max-width: 480px;
    order: 1;
  }

  img {
    ${mediaBreakpointUp('lg')} {
      left: -68px;
      position: absolute;
      top: 2px;
    }
  }

  h2 {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 1.8rem;
    }
  }

  ul {
    list-style: none;
    margin: 0 0 4rem 1rem;
    padding: 0;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 7rem 1rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 6rem 1rem;
    }

    li {
      font-size: 0.875em;
      line-height: 1.857;
      padding-left: 32px;
      position: relative;

      ${mediaBreakpointUp('sm')} {
        font-size: 0.7em;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 1em;
        line-height: 1.857;
      }

      &::before {
        border-radius: 50%;
        content: ' ';
        height: 12px;
        left: 0;
        position: absolute;
        top: 12px;
        width: 12px;
      }

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      &.green {
        &::before {
          background-color: ${props => props.theme.green};
        }
      }

      &.blue {
        &::before {
          background-color: ${props => props.theme.blue};
        }
      }

      &.red {
        &::before {
          background-color: ${props => props.theme.red};
        }
      }

      &.yellow {
        &::before {
          background-color: ${props => props.theme.yellow};
        }
      }

      &.empty {
        &.blue {
          &::before {
            background-color: transparent;
            border: 2px solid ${props => props.theme.blue};
          }
        }
      }

      ul {
        margin: 2rem 0 0 0;
      }
    }
  }
`;

const Image = styled.div`
  order: 1;
  position: relative;
  text-align: center;

  ${mediaBreakpointUp('md')} {
    margin: 0 auto;
    max-width: 624px;
  }

  ${mediaBreakpointUp('lg')} {
    max-width: 677px;
    order: 0;
  }

  img {
    /* position: absolute; */
  }
`;

const ImgBodyCircle = styled.img`
  animation: ${rotate} 12s infinite linear;
  height: auto;
  margin: 0 auto;
  max-width: 90%;
  width: 100%;

  ${mediaBreakpointUp('md')} {
    margin: 0 auto;
    max-width: 624px;
  }

  ${mediaBreakpointUp('lg')} {
    height: auto;
    width: 100%;
  }

  ${mediaBreakpointUp('xl')} {
    margin-left: 8rem;
    width: calc(100% - 8rem);
  }
`;

const ImgBodyDots = styled.img`
  left: 0;
  position: absolute;
  margin: 0 auto;
  max-width: 40%;
  right: 0;
  top: -2%;

  ${mediaBreakpointUp('sm')} {
    max-width: 43%;
    top: -6%;
  }

  ${mediaBreakpointUp('md')} {
    max-width: 47%;
    top: -6%;
  }

  ${mediaBreakpointUp('xl')} {
    left: 8rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: auto 50%;
  }

  ${mediaBreakpointUp('xl')} {
    grid-gap: 3rem;
    grid-template-columns: auto 40%;
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url('${Dots}')`};
  background-color: ${props => props.theme.solitude};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 20rem 1.5rem 1.5rem 1rem;

  ${mediaBreakpointUp('sm')} {
    padding: 35rem 1.5rem 13rem 1.5rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-size: 58% auto;
    padding: 8rem 1.5rem 2.5rem;
  }
`;

const RiskSection = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      {/* <div className="container"> */}
      <Grid>
        <Image>
          <ImgBodyCircle src={imgBodyCircle} />
          <ImgBodyDots src={imgBodyDots} />
        </Image>
        <Content>{children}</Content>
      </Grid>
      {/* </div> */}
    </Wrapper>
  );
};

RiskSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default RiskSection;
