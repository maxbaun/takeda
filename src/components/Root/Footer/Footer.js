import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Message = styled.p`
  line-height: 1.66;
  margin: 5rem auto 4rem;
  max-width: 825px;
  text-align: center;

  ${mediaBreakpointUp('sm')} {
    margin: 10rem auto 9rem;
  }

  ${mediaBreakpointUp('lg')} {
    line-height: 1.857;
    margin: 5.5rem auto 4rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    flex-flow: row nowrap;
  }

  img {
    margin: 0 auto;
    width: 227px;
  }

  a {
    color: #000;
    display: block;
    flex: 1;
    font-weight: 700;
    order: 1;
    margin: 0 0 3rem;
    text-decoration: none;
    text-transform: uppercase;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 4rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 3rem;
    }

    &:hover {
      text-decoration: underline;
    }

    &:not(.logo) {
      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }

    &.logo {
      flex: 0 0 100%;
      order: 0;
      text-align: center;

      ${mediaBreakpointUp('sm')} {
        margin: 0 0 6rem;
      }

      ${mediaBreakpointUp('lg')} {
        flex: 1 1 227px;
        order: 2;
      }
    }

    &.privacy {
      order: 2;

      ${mediaBreakpointUp('lg')} {
        order: 3;
        text-align: right;
      }
    }
  }
`;

const Wrapper = styled.footer`
  background-color: ${props => props.theme.solitude};
  font-size: 1.4rem;
  padding: 1px 0;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.4rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
  }

  hr {
    border-top: 1px dashed #c5cbcf;
    margin: 4rem auto 4rem;

    ${mediaBreakpointUp('sm')} {
      margin: 7rem auto 6rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 4rem auto 3rem;
    }
  }
`;

const Footer = ({...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Message>
          This program is organized and funded by Takeda. Presenters may be paid an honorarium by Takeda for their
          participation in this program. This program is only open to healthcare professionals (HCPs) who register to
          attend and is not intended for HCPs in the United Kingdom or the United States. Copyright © 2020 Takeda
          Pharmaceutical Company Limited. All rights reserved. Takeda and the Takeda logo are registered trademarks of
          Takeda Pharmaceutical Company Limited.
        </Message>
        <hr />
        <Nav>
          <Link className="terms" to="/terms-of-use">
            Terms of Use
          </Link>
          <Link className="logo" to="/">
            <img src={`${process.env.PUBLIC_URL}/img/takeda-logo.png`} />
          </Link>
          <Link className="privacy" to="/privacy-policy">
            Privacy Policy
          </Link>
        </Nav>
      </div>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
