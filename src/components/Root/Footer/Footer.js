import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routes';
import {mediaBreakpointUp} from '../../../utils/responsive';
import ExternalLink from '../../shared/ExternalLink';
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
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  ${mediaBreakpointUp('lg')} {
    align-items: center;
    flex-flow: row nowrap;
  }

  svg {
    margin: 0 auto;
    width: 227px;

    ${mediaBreakpointUp('sm')} {
      width: 369px;
    }

    ${mediaBreakpointUp('lg')} {
      width: 227px;
    }
  }

  a {
    color: #000;
    display: block;
    flex: 1;
    font-weight: 600;
    line-height: 1.08;
    order: 1;
    text-transform: uppercase;

    &:not(.btn) {
      font-weight: 600;
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
    }

    &.logo {
      flex: 0 0 100%;
      margin: 0 0 5rem;
      order: 0;
      text-align: center;

      ${mediaBreakpointUp('sm')} {
        margin: 0 0 11.4rem;
      }

      ${mediaBreakpointUp('lg')} {
        flex: 1 1 227px;
        margin: 0;
        order: 2;
      }
    }

    &.terms {
      margin: 0 0 4.2rem;

      ${mediaBreakpointUp('sm')} {
        margin: 0 0 7.2rem;
      }

      ${mediaBreakpointUp('lg')} {
        margin: 0;
        text-align: left;
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
  padding: 4.3rem 0 3rem;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.4rem;
    padding: 13.7rem 0 6.6rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    padding: 4.3rem 0 5.8rem;
  }

  hr {
    border-top: 1px dashed #c5cbcf;
    margin: 4rem auto 4rem;

    ${mediaBreakpointUp('sm')} {
      margin: 9.4rem auto 8rem;
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
          <ExternalLink
            className="terms"
            href="http://www.takeda.com/terms-of-use/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Use
          </ExternalLink>
          <Link className="logo" to={routes.Home}>
            <Logo />
          </Link>
          <ExternalLink
            className="privacy"
            href="http://www.takeda.com/privacy-notice/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Notice
          </ExternalLink>
        </Nav>
        <hr />
        <Message>
          <p className="note">This website is intended for users outside of the US and UK.</p>
          <p className="copy">
            Copyright &copy; 2021 Takeda Pharmaceutical Company Limited. All rights reserved. Takeda and the Takeda logo
            are registered trademarks of Takeda Pharmaceutical Company Limited.
          </p>
          <p className="prep">
            <span style={{marginRight: 14}}>VV-MEDMAT-37983</span>
            Date of preparation: February 2021
          </p>
        </Message>
      </div>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
