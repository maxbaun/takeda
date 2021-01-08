import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {listUnstyled} from '../../../utils/lists';
import {mediaBreakpointUp} from '../../../utils/responsive';
import _Hamburger from '../../shared/Hamburger';
import Icon from '../../shared/Icon';

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1505px;

  ${mediaBreakpointUp('lg')} {
    height: 82px;
    justify-content: space-between;
  }
`;

const Hamburger = styled(_Hamburger)`
  display: flex;
  right: 15px;
  top: 6px;

  ${mediaBreakpointUp('lg')} {
    display: none;
  }
`;

const Logo = styled.img``;

const LogoWrap = styled.div`
  align-items: center;
  display: flex;
`;

const Nav = styled.nav`
  display: none;
  font-size: 1.4rem;

  ${mediaBreakpointUp('lg')} {
    display: block;
  }

  ul {
    ${listUnstyled()};
    align-items: center;
    display: flex;

    > li {
      ${mediaBreakpointUp('xl')} {
        margin-right: 2rem;
      }

      ${mediaBreakpointUp('xl')} {
        margin-right: 4rem;
      }

      > a {
        color: #000;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;

        &:hover {
          color: ${props => props.theme.red};
        }

        &.has-chevron {
          align-items: center;
          display: flex;

          &::after {
            align-items: center;
            background-color: ${props => props.theme.red};
            border-radius: 50%;
            color: #fff;
            content: '\\e900';
            display: inline-flex;
            font-family: icomoon;
            height: 2em;
            justify-content: center;
            width: 2em;
          }
        }

        &.btn {
          border: 1px solid rgb(33, 45, 52);
          border-radius: 20px;
          padding: 0.71em 1.07em;

          &:hover {
            border-color: ${props => props.theme.red};
          }
        }

        &::after,
        > i {
          margin-left: 1.3rem;
        }
      }
    }
  }
`;

const Tag = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-left: 3.3rem;
  position: relative;
  text-transform: uppercase;

  &::before {
    background-color: ${props => props.theme.red};
    content: ' ';
    display: block;
    height: 44px;
    left: 0;
    margin-right: 2.7rem;
    top: 0;
    width: 3px;
  }
`;

const Wrapper = styled.header`
  background-color: #fff;
`;

const Header = ({...props}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Wrapper {...props}>
      <Container>
        <LogoWrap>
          <Logo src="https://via.placeholder.com/129x44" />
          <Tag>HAE Virtual Lab</Tag>
        </LogoWrap>
        <Nav>
          <ul>
            <li>
              <Link className="has-chevron" to="/">
                HAE Disease Background
              </Link>
            </li>
            <li>
              <Link className="has-chevron" to="/">
                Management of HAE
              </Link>
            </li>
            <li>
              <Link className="btn" to="/">
                Back to HAE CONNECT
                <Icon icon="external-link-alt" />
              </Link>
            </li>
            <li>
              <Link className="btn" to="/">
                ENG
                <Icon icon="chevron-down" />
              </Link>
            </li>
          </ul>
        </Nav>
        <Hamburger onClick={() => setNavOpen(!navOpen)} open={navOpen} />
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
