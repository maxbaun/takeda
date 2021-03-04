import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonBlue, ButtonGray} from '../../../shared/Button';
// import ExternalLink from '../../../shared/ExternalLink';
import Popup from '../../../shared/Popup';

const PopupContent = styled(Popup.Content)`
  ${mediaBreakpointUp('lg')} {
    max-width: 310px;
  }
`;
const PopupFooter = styled(Popup.Footer)`
  grid-column: 1/1;
  -ms-grid-row: 3;

  ${mediaBreakpointUp('lg')} {
    /* padding-left: calc(48% - 170px); */
    grid-column: 2/3;
    -ms-grid-column: 3;
  }

  p {
    margin: 0 0 2rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 3rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 2rem;
    }
  }
`;

const PopupGrid = styled(Popup.Grid)`
  grid-template-columns: 1fr;

  ${mediaBreakpointUp('lg')} {
    grid-template-columns: auto 1fr;
    -ms-grid-columns: 0.5fr 20px 1fr;
    -ms-grid-rows: 1fr 20px 1fr;
    max-width: 510px;
  }

  h2 {
    ${mediaBreakpointUp('lg')} {
      max-width: 180px;
    }
  }
`;

const QuestionRow = styled.div`
  align-items: center;
  display: flex;
  margin: 2rem 0;

  a,
  button {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 0;
    width: 72px;
  }

  span {
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

const Questions = styled.div`
  a,
  button {
    margin: 0 1.5rem 1rem 0;
  }
`;

const Intro = ({onNo: handleNo, onYes: handleYes}) => {
  return (
    <PopupGrid>
      <Popup.Title>
        <h2>Are you a healthcare provider?</h2>
      </Popup.Title>
      <PopupContent>
        <p>
          This site is intended for use by healthcare professionals outside the US and UK who are registered for HAE
          CONNECT.
        </p>
      </PopupContent>
      <div />

      <PopupFooter>
        <Questions>
          <p>
            <span>I am a HCP outside of the US and UK</span>
          </p>
          <ButtonGray external href="http://takeda.com" onClick={handleNo}>
            No
          </ButtonGray>
          <ButtonBlue onClick={handleYes}>Yes</ButtonBlue>
          <QuestionRow>{/* <span>I am not a healthcare provider</span> */}</QuestionRow>
          <QuestionRow>{/* <span>I am a HCP outside of the US and UK</span> */}</QuestionRow>
        </Questions>
      </PopupFooter>
    </PopupGrid>
  );
};

Intro.propTypes = {
  onNo: PropTypes.func,
  onYes: PropTypes.func
};

export default Intro;
