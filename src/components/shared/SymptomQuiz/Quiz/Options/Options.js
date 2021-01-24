import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../../utils/responsive';
import {ButtonBlue, ButtonGreen} from '../../../Button';

const Note = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.428;
  margin: 0 0 3rem;
`;

const Wrapper = styled.div`
  ul {
    ${listUnstyled()}
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 248px));

    ${mediaBreakpointUp('lg')} {
      grid-column-gap: 4rem;
      grid-row-gap: 3rem;
    }

    li {
      button {
        justify-content: center;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
        width: 100%;
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
              className={[selectedOptions.indexOf(o) > -1 ? 'selected' : ''].join('')}
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
