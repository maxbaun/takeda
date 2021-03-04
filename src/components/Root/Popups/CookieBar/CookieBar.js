import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonEmpty, ButtonPrimary} from '../../../shared/Button';
import ExternalLink from '../../../shared/ExternalLink';

const Buttons = styled.div`
  align-items: center;
  display: flex;
  -ms-grid-column: 2;

  button {
    margin: 0 1.5rem;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const Copy = styled.div`
  -ms-grid-column: 1;

  p {
    margin: 0;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-gap: 3rem;

  ${mediaBreakpointUp('lg')} {
    grid-gap: 4rem;
  }

  ${mediaBreakpointUp('lg')} {
    grid-gap: 1.5rem;
    grid-template-columns: 64% auto;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 2px solid ${props => props.theme.redAccent};
  bottom: 0;
  font-size: 1.3rem;
  line-height: 1.53;
  padding: 3rem 0;
  position: fixed;
  width: 100%;
  z-index: 999;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.2rem;
    line-height: 1.53;
    padding: 5rem 0;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.3rem;
    line-height: 1.53;
    padding: 2rem 0;
  }
`;

const CookieBar = ({children, onAccept: handleAccept, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>
          <Copy>
            <p>
              This site uses cookies to provide you with a more responsive and personalized service and to analyze site
              traffic. By using this site, you accept our use of cookies as described in our privacy notice. Please read
              our{' '}
              <ExternalLink
                className="privacy"
                href="http://www.takeda.com/privacy-notice/"
                rel="noopener noreferrer"
                target="_blank"
              >
                privacy notice
              </ExternalLink>{' '}
              for more information on the cookies we use, the processing of your personal data, and how to delete or
              block the use of cookies.
            </p>
          </Copy>
          <Buttons>
            <ButtonPrimary onClick={handleAccept}>Accept</ButtonPrimary>
            <ButtonEmpty
              external
              href="http://www.takeda.com/privacy-notice/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more
            </ButtonEmpty>
          </Buttons>
        </Inner>
      </div>
    </Wrapper>
  );
};

CookieBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onAccept: PropTypes.func
};

export default CookieBar;
