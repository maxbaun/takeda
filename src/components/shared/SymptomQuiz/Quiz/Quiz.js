import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonEmpty, ButtonGreen, ButtonPrimary} from '../../Button';
import DialogClose from '../../DialogClose';
import Answer from './Answer';
import data from './data';
import Options from './Options';

const bounce = keyframes`
  0% {
    transform: scale3d(0.1,0.1,1);
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.08);
  }
  55% {
    transform: scale3d(1.08,1.08,1);
    box-shadow: 0 10px 20px rgba(0,0,0,0);
  }
  75% {
    transform: scale3d(0.95,0.95,1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  }
  100% {
    transform: scale3d(1,1,1);
    box-shadow: 0px 49px 163px 0px rgba(0, 0, 0, 0.08);
  }
`;

const minimize = keyframes`
  0% {
    -webkit-transform: scale3d(1,1,1);
  }
  100% {
    -webkit-transform: scale3d(0.1,0.1,1);
  }
`;

const Close = styled(DialogClose)`
  background-color: ${props => props.theme.red} !important;
  position: absolute;

  ${mediaBreakpointUp('sm')} {
    height: 85px;
    width: 85px;

    &::before,
    &::after {
      left: 39px;
      top: 30px;
    }
  }

  ${mediaBreakpointUp('lg')} {
    height: 50px;
    width: 50px;

    &::before,
    &::after {
      left: 23px;
      top: 14px;
    }
  }

  &::before,
  &::after {
    background-color: #fff;
  }

  &:hover {
    background-color: ${props => props.theme.redDarker} !important;

    &::before,
    &::after {
      background-color: #fff;
    }
  }

  &:focus {
    span {
      background-color: #fff;
    }

    &::before,
    &::after {
      background-color: #fff;
    }
  }
`;

const ColAnswer = styled.div`
  -ms-grid-column: 3;
`;

const ColQuestion = styled.div`
  -ms-grid-column: 1;

  p {
    color: ${props => props.theme.blackPearl};
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .question-number {
    font-size: 2rem;
    line-height: 1.1;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      line-height: 0.92;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.44;
      margin: 0 0 2.4rem;
    }
  }

  .question-text {
    font-size: 2rem;
    line-height: 1.1;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      line-height: 0.92;
      margin: 0 0 2.9rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 3.4rem;
      line-height: 1.29;
      margin: 0;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 8rem 1.5rem;
  width: 100%;

  ${mediaBreakpointUp('sm')} {
    padding: 10.7rem 1.5rem 10.7rem;
  }

  ${mediaBreakpointUp('lg')} {
    height: 100%;
    padding: 0 1.5rem 0 20rem;
  }
`;

const Inner = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 410px;
  width: 100%;

  ${mediaBreakpointUp('sm')} {
  }

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    height: 100%;
    grid-column-gap: 60px;
    grid-template-columns: 35% auto;
    -ms-grid-columns: 35% 60px 1fr;
    max-width: none;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  left: 0;
  min-height: calc(100% - 100px);
  margin: 0 auto;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 500ms ease-in;
  width: 100%;
  z-index: 2;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    max-width: calc(100% - 30px);
    min-height: 600px;
    top: 8rem;
  }

  ${mediaBreakpointUp(1450)} {
    max-width: 1450px;
  }

  > div {
    animation: ${props => (props.isOpen ? bounce : minimize)} 500ms linear;
    background-color: #fff;
    box-shadow: 0px 49px 163px 0px rgba(0, 0, 0, 0.08);
    position: absolute;
    transition: box-shadow 0s 500ms;
    width: 100%;
  }
`;

const Quiz = ({isOpen, onClose: handleClose, onUpdate: handleUpdate, ...props}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [view, setView] = useState('options');
  const el = useRef();

  const question = data[questionIndex];

  const isLastQuestion = questionIndex + 1 >= data.length;

  const _handleClose = () => {
    handleClose();
    setQuestionIndex(0);
    setSelectedOptions([]);
    setView('options');
  };

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
      if (
        // correct answers all selected AND total options selected equals the number of correct answers
        correctAnswers.length === question.correctOptions.length &&
        selectedOptions.length === question.correctOptions.length
      ) {
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

  useEffect(() => {
    if (typeof handleUpdate === 'function') {
      handleUpdate({
        height: el.current.offsetHeight
      });
    }
  }, [isOpen, view, questionIndex]);

  return (
    <Wrapper {...props} isOpen={isOpen}>
      <Container ref={el}>
        <Close onClick={_handleClose} />
        <Inner>
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
                <ul>
                  <li>
                    <ButtonEmpty
                      className="read-more"
                      href={question.readMoreUrl}
                      onClick={() => {
                        handleClose();
                        window.scrollTo(0, 0);
                      }}
                      renderAs="a"
                    >
                      Read More
                    </ButtonEmpty>
                  </li>

                  {isLastQuestion === false ? (
                    <li>
                      <ButtonGreen className="next" onClick={handleNextClick}>
                        Next Question
                      </ButtonGreen>
                    </li>
                  ) : null}
                </ul>
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
                <ul>
                  <li>
                    <ButtonPrimary className="try-again" onClick={handleTryAgain}>
                      Try Again
                    </ButtonPrimary>
                  </li>
                  <li>
                    <ButtonEmpty
                      className="read-more"
                      onClick={() => {
                        handleClose();
                        window.scrollTo(0, 0);
                      }}
                      href={question.readMoreUrl}
                      renderAs="a"
                    >
                      Read More
                    </ButtonEmpty>
                  </li>
                  {isLastQuestion === false ? (
                    <li>
                      <ButtonGreen className="next" onClick={handleNextClick}>
                        Next Question
                      </ButtonGreen>
                    </li>
                  ) : null}
                </ul>
              }
              title="Oops"
              titleClass="incorrect"
              style={{display: view === 'incorrect' ? 'block' : 'none'}}
            >
              <p>Oh no, at least one of your answers are incorrect!</p>
            </Answer>
          </ColAnswer>
        </Inner>
      </Container>
    </Wrapper>
  );
};

Quiz.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdate: PropTypes.func
};

export default Quiz;
