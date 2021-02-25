import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import InViewSection from '../InViewSection/InViewSection';
import SectionHeader from '../SectionHeader';
import Dots from './dot-pattern-quiz.png';
import Quiz from './Quiz';

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
  position: relative;
  text-transform: uppercase;
  transition: background-color 0.4s, transform 0.4s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 2);
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

  &::after {
    content: '';
    height: 198px;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 ${props => props.theme.redDarker};
    transition: box-shadow 0.4s 0.1s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 5);
    width: 198px;

    ${mediaBreakpointUp('sm')} {
      height: 333px;
      width: 333px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 188px;
      width: 188px;
    }
  }

  &::before {
    content: '';
    width: 206px;
    height: 206px;
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 ${props => props.theme.red};
    transition: box-shadow 0.4s 0.2s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 2);

    ${mediaBreakpointUp('sm')} {
      height: 341px;
      width: 341px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 196px;
      width: 196px;
    }
  }

  &:hover {
    background-color: ${props => props.theme.redDarker};
    text-decoration: underline;
    transform: scale(1.1);

    &:focus {
      outline: none;
    }

    &::after {
      box-shadow: 0 0 0 5px ${props => props.theme.redDarker};
    }

    &::before {
      box-shadow: 0 0 0 15px ${props => props.theme.red};
    }
  }
`;

const Wrapper = styled.div`
  /* background-image: ${`url('${Dots}')`};
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 1600px auto; */
  position: relative;
`;

const SymptomQuiz = ({children, ...props}) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [minHeight, setMinHeight] = useState(false);

  const handleQuizUpdate = ({height}) => {
    setMinHeight(quizOpen ? height : 0);
  };

  return (
    <InViewSection>
      <Wrapper {...props} style={{minHeight}}>
        <Background src={Dots} />
        <div className="container">
          <Content className="fade-in-content right">
            <SectionHeader>
              <h2>Symptom Quiz</h2>
              <h3>Test your knowledge on HAE!</h3>
            </SectionHeader>
            <StartQuizBtn className="fade-in-media bottom" onClick={() => setQuizOpen(true)}>
              Start Quiz
            </StartQuizBtn>
          </Content>
        </div>
        <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} onUpdate={handleQuizUpdate} />
      </Wrapper>
    </InViewSection>
  );
};

SymptomQuiz.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default SymptomQuiz;
