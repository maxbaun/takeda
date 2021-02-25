import {rgba} from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routes';
import {mediaBreakpointUp} from '../../../utils/responsive';
import Icon from '../../shared/Icon';

const BtnMain = styled.button`
  align-items: center;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 2.8rem;
  height: 75px;
  justify-content: center;
  grid-column: 1/3;
  margin: 0 auto;
  position: relative;
  width: 75px;

  ${mediaBreakpointUp('sm')} {
    height: 124px;
    font-size: 5rem;
    width: 124px;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 4rem;
    height: 83px;
    grid-column: auto;
    width: 83px;
  }

  &::before {
    background-color: ${props => props.theme.red};
    border-radius: 50%;
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease;
    width: 100%;
    z-index: 0;
  }

  i {
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  &:hover {
    &::before {
      background-color: ${props => props.theme.redDark};
      transform: scale(1.2);
    }
  }

  &:disabled {
    background-color: #9d9d9d;
  }
`;

const BtnSecondary = styled.button`
  align-items: center;
  background: none;
  border: 1px solid #212d34;
  border-radius: 40px;
  color: #000;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1.6rem;
  font-weight: 700;
  grid-row: 2/2;
  line-height: 1;
  padding: 0.5em 1.6em;
  position: relative;
  text-decoration: none;
  transition: none !important;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.3rem;
    padding: 1.9rem 3.6rem;
  }

  ${mediaBreakpointUp('lg')} {
    border: none;
    flex-flow: row nowrap;
    font-size: 1.4rem;
    grid-row: initial;
    padding: 0;
  }

  &:not(.btn) {
    text-decoration: none;
  }

  &:hover {
    border-color: ${props => props.theme.red};

    .text {
      color: ${props => props.theme.redDarker};
      text-decoration: underline;
    }

    .icon {
      border-color: ${props => props.theme.redDarker};
      color: ${props => props.theme.redDarker};
      transform: none;
    }
  }

  .icon {
    align-items: center;
    border: 2px solid ${props => props.theme.redDark};
    border-radius: 50%;
    color: ${props => props.theme.redDark};
    display: none;
    font-size: 2rem;
    height: 30px;
    justify-content: center;
    margin-bottom: 1rem;
    order: 0;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    width: 30px;

    ${mediaBreakpointUp('lg')} {
      display: flex;
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
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.1;
    order: 1;
    text-transform: uppercase;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.3rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.4rem;
      order: initial;
    }
  }

  &.discover-more {
    grid-column: 1/3;

    ${mediaBreakpointUp('lg')} {
      grid-column: initial;
    }
  }

  &.download {
    display: flex;
    grid-column: 1/3;
    grid-row: 3;

    ${mediaBreakpointUp('lg')} {
      grid-column: initial;
      grid-row: initial;
      margin: 0;
    }
  }
`;

const BtnGrid = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(2, minmax(0, 50%));
  justify-content: center;
  padding: 1rem 0;
  width: 100%;

  ${mediaBreakpointUp('sm')} {
    grid-row-gap: 4.4rem;
  }

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 45px;
    grid-template-columns: 1fr 85px 1fr;
    padding: 2rem 0;
  }
`;

const Content = styled.div``;

const Inner = styled.div``;

const RetakeNote = styled.button`
  align-items: center;
  background-color: #eeeeee;
  border: none;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: inline-flex;
  font-size: 1.6rem;
  font-weight: 400;
  height: 41px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -41px;
  width: 223px;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  position: relative;

  button {
    pointer-events: ${props => (props.isDisabled ? 'none' : 'initial')};
    transition: background-color 0.2s ease-in-out, transform 0.2s ease;
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
    background-color: ${() => rgba('#eeeeee', 0.8)};
    opacity: ${props => (props.isDisabled ? 1 : 0)};
    z-index: 0;
  }

  ${BtnMain} {
    background-color: ${props => (props.isDisabled ? '#9d9d9d' : props.theme.redDark)};

    &:hover {
      background-color: ${props => props.theme.redDarker};
    }
  }
`;

const ActionBar = ({
  canDownload,
  children,
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
            <BtnGrid>
              <BtnSecondary as={Link} className="discover-more" to={`${routes.About}#symptomMap`}>
                <span className="text">Discover Symptom Map</span>
                <Icon className="icon" icon="body" />
              </BtnSecondary>
              <BtnMain onClick={handleRedoClick}>
                <Icon icon="repeat-arrow" />
              </BtnMain>
              <BtnSecondary className="download" disabled={!canDownload} onClick={handleDownloadClick}>
                <Icon className="icon" icon="download" />
                <span className="text">Download Photo</span>
              </BtnSecondary>
            </BtnGrid>
            <RetakeNote onClick={handleRedoClick}>Retake photo</RetakeNote>
          </>
        ) : null}
        {children ? <Content>{children}</Content> : null}
      </Inner>
    </Wrapper>
  );
};

ActionBar.propTypes = {
  canDownload: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  isDisabled: PropTypes.bool,
  mode: PropTypes.oneOf(['camera', 'result']),
  onDownloadClick: PropTypes.func,
  onRedoClick: PropTypes.func,
  onTakeClick: PropTypes.func
};

export default ActionBar;
