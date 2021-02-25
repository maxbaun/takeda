import PropTypes from 'prop-types';
import React from 'react';
import styled, {keyframes} from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import InViewSection from '../../../shared/InViewSection/InViewSection';
import Dots from './dot-pattern-risk-of-misdiagnosis.png';
import imgBodyCircle from './line-pattern-animate.png';
import imgBodyDots from './person-static.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Content = styled.div`
  margin: 0 0 10.8rem;
  -ms-grid-column: 2;

  ${mediaBreakpointUp('md')} {
    margin: 0 0 20.8rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    max-width: 480px;
  }

  .risk-section-content {
    display: flex;
    position: relative;

    ${mediaBreakpointUp('lg')} {
      display: block;
    }
  }

  .risk-section-icon {
    padding-top: 7px;
    margin-right: 1rem;

    ${mediaBreakpointUp('sm')} {
      margin-right: 2.5rem;
      padding-top: 10px;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0;
      padding-top: 0;
    }
  }

  img {
    width: 23px;

    ${mediaBreakpointUp('sm')} {
      width: 43px;
    }

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
    margin: 0 0 4rem 0;
    padding: 0;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 7rem 0;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 6rem 1rem;
    }

    li {
      font-size: 0.875em;
      line-height: 1.857;
      position: relative;
      padding-left: 33px;
      ${mediaBreakpointUp('sm')} {
        font-size: 0.7em;
        padding-left: 67px;
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

        li {
          font-size: 1em;
        }
      }
    }
  }
`;

const Image = styled.div`
  margin: 0 auto 8.1rem;
  position: relative;
  text-align: center;
  -ms-grid-column: 1;

  ${mediaBreakpointUp('sm')} {
    margin: 0 auto 13.1rem;
  }

  ${mediaBreakpointUp('md')} {
    margin: 0 auto 13.1rem;
    max-width: 624px;
  }

  ${mediaBreakpointUp('lg')} {
    max-width: 677px;
  }

  img {
    /* position: absolute; */
  }
`;

const ImgBodyCircle = styled.img`
  animation: ${rotate} 180s infinite linear;
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
    -ms-grid-columns: 1fr 50%;
  }

  ${mediaBreakpointUp('xl')} {
    grid-gap: 3rem;
    grid-template-columns: auto 40%;
    -ms-grid-columns: 1fr 40%;
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url('${Dots}')`};
  background-color: ${props => props.theme.solitude};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 10rem 0 1.5rem 0;

  ${mediaBreakpointUp('sm')} {
    padding: 17.5rem 0 13rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-size: 58% auto;
    padding: 8rem 0 2.5rem;
  }
`;

const RiskSection = ({children, inView, ...props}) => {
  return (
    <InViewSection>
      <Wrapper {...props}>
        {/* <div className="container"> */}
        <Grid>
          <Image className="fade-in-media">
            <ImgBodyCircle src={imgBodyCircle} />
            <ImgBodyDots src={imgBodyDots} />
          </Image>
          <Content className="fade-in-content bottom">
            <div className="container">{children}</div>
          </Content>
        </Grid>
        {/* </div> */}
      </Wrapper>
    </InViewSection>
  );
};

RiskSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  inView: PropTypes.bool
};

export default RiskSection;
