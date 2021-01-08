import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import Dots from './dot-pattern-risk-of-misdiagnosis.png';
import HumanImage from './human-dots.png';

const Content = styled.div`
  font-size: 1.6rem;
  line-height: 1.625;
  max-width: 480px;

  h2 {
    font-size: 2.25em;
    line-height: 1.1;
    margin: 0 0 3rem;
  }

  p {
    margin: 0 0 6rem;
  }

  ul {
    list-style: none;
    margin: 0 0 6rem 1rem;
    padding: 0;

    li {
      display: flex;
      font-weight: 600;
      line-height: 1.2;
      position: relative;

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
  text-align: center;

  img {
    height: auto;
    width: 100%;

    ${mediaBreakpointUp('lg')} {
      height: 677px;
      width: 601px;
    }
  }
`;

const Grid = styled.div`
  ${mediaBreakpointUp('lg')} {
    align-items: center;
    display: grid;
    grid-gap: 0;
    grid-template-columns: auto 40%;
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url('${Dots}')`};
  background-color: ${props => props.theme.solitude};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 4rem 1.5rem 1.5rem;

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
