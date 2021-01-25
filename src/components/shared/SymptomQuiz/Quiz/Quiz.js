import React, {useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonEmpty, ButtonGreen, ButtonPrimary} from '../../Button';
import Answer from './Answer';
import data from './data';
import Options from './Options';

const ColAnswer = styled.div``;

const ColQuestion = styled.div`
  p {
    color: ${props => props.theme.blackPearl};
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .question-number {
    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.44;
      margin: 0 0 2.4rem;
    }
  }

  .question-text {
    ${mediaBreakpointUp('lg')} {
      font-size: 2.4rem;
      line-height: 1.29;
      margin: 0;
    }
  }
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 60px;
    grid-template-columns: 30% auto;
    padding: 0 1.5rem 0 20rem;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 200px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  height: calc(100% - 100px);
  left: 0;
  margin: 0 auto;
  position: absolute;
  max-width: 1450px;
  right: 0;
  width: 100%;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    top: 8rem;
  }
`;

const Quiz = ({...props}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [view, setView] = useState('options');

  const question = data[questionIndex];

  const isLastQuestion = questionIndex + 1 >= data.length;

  const handleToggle = option => {
    const index = selectedOptions.indexOf(option);

    if (index > -1) {
      return setSelectedOptions(selectedOptions.filter(o => o !== option));
    }

    return setSelectedOptions(selectedOptions.concat([option]));
  };

  const handleNextClick = () => {
    if (questionIndex + 1 < data.length) {
      setSelectedOptions([]);
      setView('options');
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleTryAgain = () => {
    setView('options');
    setSelectedOptions([]);
  };

  const handleSubmit = () => {
    const correctAnswers = selectedOptions.filter(o => question.correctOptions.findIndex(co => co === o) > -1);

    // ALL answers required
    if (question.allRequired) {
      if (selectedOptions.length === question.correctOptions.length) {
        return setView('correct');
      }

      return setView('incorrect');
    }

    // If only one answer required
    if (correctAnswers.length > 0) {
      return setView('correct');
    }

    return setView('incorrect');
  };

  return (
    <Wrapper {...props}>
      <Container>
        <ColQuestion>
          <p className="question-number">Question {questionIndex + 1}</p>
          <p className="question-text">{question.question}</p>
        </ColQuestion>
        <ColAnswer>
          <Options
            onSubmit={handleSubmit}
            onToggle={handleToggle}
            options={question.options}
            selectedOptions={selectedOptions}
            style={{display: view === 'options' ? 'block' : 'none'}}
          />
          <Answer
            actions={
              <>
                <ButtonEmpty external href={question.readMoreUrl}>
                  Read More
                </ButtonEmpty>
                {isLastQuestion === false ? <ButtonGreen onClick={handleNextClick}>Next Question</ButtonGreen> : null}
              </>
            }
            references={question.references}
            title="Correct!"
            titleClass="correct"
            style={{display: view === 'correct' ? 'block' : 'none'}}
          >
            {question.answer}
          </Answer>
          <Answer
            actions={
              <>
                <ButtonPrimary onClick={handleTryAgain}>Try Again</ButtonPrimary>
                <ButtonEmpty external href={question.readMoreUrl}>
                  Read More
                </ButtonEmpty>
                {isLastQuestion === false ? <ButtonGreen onClick={handleNextClick}>Next Question</ButtonGreen> : null}
              </>
            }
            title="Oops"
            titleClass="incorrect"
            style={{display: view === 'incorrect' ? 'block' : 'none'}}
          >
            <p>Oh no, at least one of your answers are incorrect!</p>
          </Answer>
        </ColAnswer>
      </Container>
    </Wrapper>
  );
};

export default Quiz;