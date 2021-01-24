import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Message = styled.div`
  line-height: 1.66;
  margin: 5rem auto 0;
  max-width: 825px;
  text-align: center;

  ${mediaBreakpointUp('sm')} {
    margin: 10rem auto 0;
  }

  ${mediaBreakpointUp('lg')} {
    line-height: 1.857;
    margin: 2.3rem auto 0;
  }

  p {
    margin: 0;

    &:first-child {
      font-size: 1.4rem;
      line-height: 1.42;
      margin: 0 0 1rem;
    }

    &:last-child {
      font-size: 1.2rem;
      line-height: 1.58;
    }
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
    text-decoration: none;
    text-transform: uppercase;

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
      margin: 0 0 3rem;
      order: 0;
      text-align: center;

      ${mediaBreakpointUp('sm')} {
        margin: 0 0 6rem;
      }

      ${mediaBreakpointUp('lg')} {
        flex: 1 1 227px;
        margin: 0;
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
  padding: 4.3rem 0 5.8rem;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.4rem;
    padding: 4.3rem 0 5.8rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    padding: 4.3rem 0 5.8rem;
  }

  hr {
    border-top: 1px dashed #c5cbcf;
    margin: 4rem auto 4rem;

    ${mediaBreakpointUp('sm')} {
      margin: 7rem auto 6rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 4rem auto 2.3rem;
    }
  }
`;

const Footer = ({...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
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
        <hr />
        <Message>
          <p>
            This website is intended for users outside of the US and UK. The website has been developed by Takeda in
            accordance with industry and legal standards. Takeda makes every reasonable effort to include accurate and
            current information.{' '}
          </p>
          <p>
            Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the Takeda Logo
            are trademarks of Takeda Pharmaceutical Company Limited, used under license. Shire is now part of Takeda.{' '}
          </p>
        </Message>
      </div>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
