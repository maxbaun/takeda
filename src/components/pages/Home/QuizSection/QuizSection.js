import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import Dots from './dot-pattern-quiz.png';

const Background = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;

  ${mediaBreakpointUp('lg')} {
    right: 50%;
    min-width: 809px;
    width: 50%;
  }
`;

const Content = styled.div`
  padding: 20rem 0 12rem;

  ${mediaBreakpointUp('sm')} {
    padding: 34rem 0 13rem;
  }

  ${mediaBreakpointUp('md')} {
    padding: 56rem 0 13rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin-left: 50%;
    max-width: 490px;
    padding: 12rem 0 15rem;
  }

  h2 {
    margin: 0 0 3rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.42;
    margin: 0 0 4rem;
    text-transform: uppercase;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      line-height: 1.42;
      margin: 0 0 6rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.55;
      margin: 0 0 4rem;
    }
  }

  p {
    margin: 0 0 3.5rem;
    line-height: 1.75;
  }
`;

const StartQuizBtn = styled.button`
  align-items: center;
  background: none;
  background-color: ${props => props.theme.red};
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 200px;
  font-size: 2rem;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
  width: 200px;

  ${mediaBreakpointUp('sm')} {
    height: 335px;
    font-size: 3.1rem;
    width: 335px;
  }

  ${mediaBreakpointUp('lg')} {
    height: 190px;
    font-size: 1.8rem;
    margin-left: -20px;
    width: 190px;
  }
`;

const Wrapper = styled.div`
  /* background-image: ${`url('${Dots}')`};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 1600px auto; */
`;

const QuizSection = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Background src={Dots} />
      <div className="container">
        <Content>
          {children}
          <StartQuizBtn>Start Quiz</StartQuizBtn>
        </Content>
      </div>
    </Wrapper>
  );
};

QuizSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default QuizSection;
