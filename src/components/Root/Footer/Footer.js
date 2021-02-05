import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routes';
import {mediaBreakpointUp} from '../../../utils/responsive';
import Logo from '../../shared/Logo';

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

    &.note {
      font-size: 1.4rem;
      line-height: 1.428;
      margin: 0 0 0.8rem;
    }

    &.copy {
      font-size: 1.2rem;
      line-height: 1.583;
      margin: 0 0 3rem;
    }

    &.prep {
      font-size: 1.3rem;
      line-height: 1.53;
      margin: 0;
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

  svg {
    margin: 0 auto;
    width: 227px;
  }

  a {
    color: #000;
    display: block;
    flex: 1;
    font-weight: 600;
    order: 1;
    text-transform: uppercase;

    &:not(.btn) {
      text-decoration: none;
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
          <Link external className="terms" href="http://www.takeda.com/terms-of-use/">
            Terms of Use
          </Link>
          <Link className="logo" to={routes.Home}>
            <Logo />
          </Link>
          <Link external className="privacy" href="http://www.takeda.com/privacy-notice/">
            Privacy Notice
          </Link>
        </Nav>
        <hr />
        <Message>
          <p className="note">
            This website is intended for users outside of the US and UK. The website has been developed by Takeda in
            accordance with industry and legal standards. Takeda makes every reasonable effort to include accurate and
            current information.
          </p>
          <p className="copy">
            Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the Takeda logo
            are registered trademarks of Takeda Pharmaceutical Company Limited.
          </p>
          <p className="prep">
            <span style={{marginRight: 14}}>VV-MEDMAT-37228</span>
            Date of preparation: January 2021
          </p>
        </Message>
      </div>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
