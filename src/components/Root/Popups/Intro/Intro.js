import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonBlue, ButtonGray} from '../../../shared/Button';
import ExternalLink from '../../../shared/ExternalLink';
import Popup from '../../../shared/Popup';

const PopupContent = styled(Popup.Content)`
  ${mediaBreakpointUp('lg')} {
    max-width: 310px;
  }
`;
const PopupFooter = styled(Popup.Footer)`
  ${mediaBreakpointUp('lg')} {
    padding-left: calc(48% - 170px);
  }
`;

const PopupGrid = styled(Popup.Grid)`
  ${mediaBreakpointUp('lg')} {
    grid-template-columns: 48% auto;
    max-width: none;
  }
`;

const QuestionRow = styled.div`
  align-items: center;
  display: flex;
  margin: 2rem 0;

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

const Questions = styled.div``;

const Intro = ({onNo: handleNo, onYes: handleYes}) => {
  return (
    <PopupGrid>
      <Popup.Title>
        <h2>
          Are you a <br />
          healthcare <br />
          provider?
        </h2>
      </Popup.Title>
      <PopupContent>
        <p>
          This site is only intended for use by healthcare professionals outside the US and UK. If you are a patient,
          you can visit <ExternalLink href="http://www.takeda.com/">Takeda.com</ExternalLink> to learn more about HAE.
        </p>
      </PopupContent>
      <PopupFooter>
        <Questions>
          <QuestionRow>
            <ButtonGray onClick={handleNo}>No</ButtonGray>
            <span>I am not a healthcare provider</span>
          </QuestionRow>
          <QuestionRow>
            <ButtonBlue onClick={handleYes}>Yes</ButtonBlue>
            <span>I am a healthcare provider outside of the US and UK</span>
          </QuestionRow>
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
