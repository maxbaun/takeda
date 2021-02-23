import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../../utils/responsive';
import {ButtonBlue, ButtonGreen} from '../../../Button';

const Note = styled.p`
  font-style: italic;
  line-height: 1.11;
  margin: 0 0 5rem;

  ${mediaBreakpointUp('sm')} {
    font-size: 1.8rem;
    margin: 0 0 8.6rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    line-height: 1.428;
  }
`;

const Wrapper = styled.div`
  ul {
    ${listUnstyled()}
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 3rem;

    ${mediaBreakpointUp('sm')} {
      grid-row-gap: 5rem;
    }

    ${mediaBreakpointUp('lg')} {
      grid-column-gap: 4rem;
      grid-row-gap: 3rem;
      grid-template-columns: repeat(2, minmax(0, 280px));
      -ms-grid-rows: 1fr 30px 1fr 30px 1fr 30px 1fr;
      -ms-grid-columns: minmax(0, 280px) 40px minmax(0, 280px);
    }

    li {
      &:nth-child(odd) {
        -ms-grid-column: 1;
      }
      &:nth-child(even) {
        -ms-grid-column: 3;
      }

      &:nth-child(1) {
        -ms-grid-row: 1;
      }
      &:nth-child(2) {
        -ms-grid-row: 1;
      }
      &:nth-child(3) {
        -ms-grid-row: 3;
      }
      &:nth-child(4) {
        -ms-grid-row: 3;
      }
      &:nth-child(5) {
        -ms-grid-row: 5;
      }
      &:nth-child(6) {
        -ms-grid-row: 5;
      }
      &:nth-child(7) {
        -ms-grid-row: 7;
      }
      &:nth-child(8) {
        -ms-grid-row: 7;
      }

      button {
        justify-content: center;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
        position: relative;
        width: 100%;

        i {
          left: 2rem;
          opacity: 0;
          position: absolute;
          transition: opacity 0.2s ease-in-out;
        }

        &.active {
          i {
            opacity: 1;
          }
        }

        &:hover {
          i:first-child {
            transform: none;
          }
        }
      }
    }
  }
`;

const Options = ({onSubmit: handleSubmit, onToggle: handleToggle, options, selectedOptions, ...props}) => {
  return (
    <Wrapper {...props}>
      <Note>Multiple choice answers (select all that apply):</Note>
      <ul>
        {options.map((o, index) => (
          <li key={index}>
            <ButtonGreen
              iconRight={false}
              className={[selectedOptions.indexOf(o) > -1 ? 'active' : ''].join('')}
              icon="check"
              onClick={() => handleToggle(o)}
            >
              {o}
            </ButtonGreen>
          </li>
        ))}
        {options.length % 2 === 0 ? null : <li />}
        <li>
          <ButtonBlue onClick={handleSubmit} style={{visibility: selectedOptions.length > 0 ? 'visible' : 'hidden'}}>
            Submit
          </ButtonBlue>
        </li>
      </ul>
    </Wrapper>
  );
};

Options.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  options: PropTypes.array,
  selectedOptions: PropTypes.array
};

export default Options;
