import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import Icon from '../../shared/Icon';

const BtnMain = styled.button`
  align-items: center;
  background-color: #9d9d9d;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 50px;
  justify-content: center;
  grid-column: 1/3;
  margin: 0 auto;
  width: 50px;

  ${mediaBreakpointUp('lg')} {
    font-size: 4rem;
    height: 83px;
    grid-column: auto;
    width: 83px;
  }

  &:hover {
    background-color: ${props => props.theme.redDark};
  }

  &:disabled {
    background-color: #9d9d9d;
  }
`;

const BtnSecondary = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  flex-flow: column nowrap;
  grid-row: 2/2;
  justify-content: space-between;
  position: relative;

  ${mediaBreakpointUp('lg')} {
    flex-flow: row nowrap;
    grid-row: initial;
  }

  &:hover {
    .text {
      text-decoration: underline;
    }

    .icon {
      border-color: ${props => props.theme.redDarker};
      color: ${props => props.theme.redDarker};
    }
  }

  .icon {
    align-items: center;
    border: 2px solid ${props => props.theme.red};
    border-radius: 50%;
    color: ${props => props.theme.red};
    display: flex;
    font-size: 2rem;
    height: 30px;
    justify-content: center;
    margin-bottom: 1rem;
    order: 0;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    width: 30px;

    ${mediaBreakpointUp('lg')} {
      height: 58px;
      flex: 0 0 58px;
      font-size: 3rem;
      margin-bottom: 0;
      position: static;
      width: 58px;

      &:last-child {
        margin-left: 2.5rem;
      }
      &:first-child {
        margin-right: 2.5rem;
      }
    }
  }

  .text {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.1;
    order: 1;
    text-transform: uppercase;

    ${mediaBreakpointUp('lg')} {
      order: initial;
    }
  }
`;

const Inner = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 50%));
  justify-content: center;
  padding: 1rem 0;
  width: 100%;

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 45px;
    grid-template-columns: auto 85px auto;
    padding: 2rem 0;
  }
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  position: relative;

  button {
    pointer-events: ${props => (props.isDisabled ? 'none' : 'initial')};
    transition: background-color 0.2s ease-in-out;
  }

  &::before {
    content: ' ';
    pointer-events: ${props => (props.isDisabled ? 'block' : 'none')};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-color: ${() => rgba('#eeeeee', 0.5)};
    opacity: ${props => (props.isDisabled ? 1 : 0)};
    z-index: 0;
  }
`;

const ActionBar = ({
  isDisabled,
  mode,
  onDownloadClick: handleDownloadClick,
  onRedoClick: handleRedoClick,
  onTakeClick: handleTakeClick,
  ...props
}) => {
  return (
    <Wrapper {...props} isDisabled={isDisabled}>
      <Inner>
        {mode === 'camera' ? (
          <>
            <span />
            <BtnMain onClick={handleTakeClick}>
              <Icon icon="camera" />
            </BtnMain>
            <span />
          </>
        ) : null}
        {mode === 'result' ? (
          <>
            <BtnSecondary>
              <span className="text">Discover Symptom Map</span>
              <Icon className="icon" icon="male" />
            </BtnSecondary>
            <BtnMain onClick={handleRedoClick}>
              <Icon icon="redo" style={{transform: 'rotateY(180deg)'}} />
            </BtnMain>
            <BtnSecondary onClick={handleDownloadClick}>
              <Icon className="icon" icon="download" />
              <span className="text">Download Photo</span>
            </BtnSecondary>
          </>
        ) : null}
      </Inner>
    </Wrapper>
  );
};

ActionBar.propTypes = {
  isDisabled: PropTypes.bool,
  mode: PropTypes.oneOf(['camera', 'result']),
  onDownloadClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  onTakeClick: PropTypes.func
};

export default ActionBar;
