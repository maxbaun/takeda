import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import Dots from './dot-pattern-quiz.png';

const Background = styled.img`
  min-width: 809px;
  position: absolute;
  right: 50%;
  width: 50%;
  z-index: -1;
`;

const Content = styled.div`
  max-width: 490px;
  padding: 12rem 0 15rem;

  ${mediaBreakpointUp('lg')} {
    margin-left: 50%;
  }

  h2 {
    margin: 0 0 3rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.55;
    margin: 0 0 4rem;
    text-transform: uppercase;
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
  font-size: 1.8rem;
  font-weight: 700;
  height: 190px;
  justify-content: center;
  margin-left: -20px;
  text-transform: uppercase;
  width: 190px;
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
