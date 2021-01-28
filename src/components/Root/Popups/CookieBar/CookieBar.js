import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import {ButtonEmpty, ButtonPrimary} from '../../../shared/Button';

const Buttons = styled.div`
  align-items: center;
  display: flex;

  button {
    margin: 0 1.5rem;
  }
`;

const Copy = styled.div`
  p {
    margin: 0;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  ${mediaBreakpointUp('lg')} {
    grid-template-columns: 64% auto;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 2px solid ${props => props.theme.redAccent};
  bottom: 0;
  font-size: 1.3rem;
  line-height: 1.53;
  padding: 2rem 0;
  position: fixed;
  width: 100%;
  z-index: 999;
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
              our <Link to="/privacy">privacy notice</Link> for more information on the cookies we use, the processing
              of your personal data, and how to delete or block the use of cookies.
            </p>
          </Copy>
          <Buttons>
            <ButtonPrimary onClick={handleAccept}>Accept</ButtonPrimary>
            <ButtonEmpty>Learn more</ButtonEmpty>
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
