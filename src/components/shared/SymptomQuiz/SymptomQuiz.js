import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import SectionHeader from '../SectionHeader/SectionHeader';
import Dots from './dot-pattern-quiz.png';

const Background = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;

  ${mediaBreakpointUp('lg')} {
    right: 50%;
    min-width: 817px;
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
    padding: 11vw 0;
  }

  h2 {
    margin: 0 0 3rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.42;
    margin: 0 0 4rem;

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
  background-color: ${props => props.theme.redDark};
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
  transition: background-color 0.2s ease-in-out;
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

  &:hover {
    background-color: ${props => props.theme.redDarker};
  }
`;

const Wrapper = styled.div`
  /* background-image: ${`url('${Dots}')`};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 1600px auto; */
`;

const SymptomQuiz = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Background src={Dots} />
      <div className="container">
        <Content>
          <SectionHeader>
            <h2>Symptom Quiz</h2>
            <h3>Test your knowledge on HAE!</h3>
          </SectionHeader>
          <StartQuizBtn>Start Quiz</StartQuizBtn>
        </Content>
      </div>
    </Wrapper>
  );
};

SymptomQuiz.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default SymptomQuiz;
