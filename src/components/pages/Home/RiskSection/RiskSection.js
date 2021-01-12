import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import Dots from './dot-pattern-risk-of-misdiagnosis.png';
import HumanImage from './human-dots.png';

const Content = styled.div`
  margin: 0 0 5rem;
  order: 0;

  ${mediaBreakpointUp('md')} {
    margin: 0 0 10rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    max-width: 480px;
    order: 1;
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
      display: flex;
      font-weight: 600;
      font-size: 0.875em;
      line-height: 1.1;
      position: relative;

      ${mediaBreakpointUp('sm')} {
        font-size: 0.7em;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 1em;
        line-height: 0.875;
      }

      &::before {
        border-radius: 50%;
        content: ' ';
        display: block;
        height: 11.92px;
        margin-right: 2rem;
        margin-top: 0.5rem;
        width: 11.92px;
      }

      &:not(:last-child) {
        margin-bottom: 3rem;
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
    }
  }
`;

const Image = styled.div`
  order: 1;
  text-align: center;

  ${mediaBreakpointUp('lg')} {
    order: 0;
  }

  img {
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
      max-width: 677px;
      width: 100%;
    }

    ${mediaBreakpointUp('xl')} {
      margin-left: 8rem;
      width: calc(100% - 8rem);
    }
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
          <img src={HumanImage} />
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