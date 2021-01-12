import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {listUnstyled} from '../../../utils/lists';
import {mediaBreakpointUp} from '../../../utils/responsive';
import _Hamburger from '../../shared/Hamburger';
import Icon from '../../shared/Icon';

const BrandWrap = styled.div`
  align-items: center;
  display: flex;
  width: calc(100% - 50px);

  a {
    width: 129px;

    ${mediaBreakpointUp('sm')} {
      width: auto;
    }
  }

  img {
    /* height: 54px; */
    max-width: 159px;
    width: 100%;

    ${mediaBreakpointUp('sm')} {
      height: 54px;
      width: 159px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 44px;
      width: 129px;
    }
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 101px;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1505px;

  ${mediaBreakpointUp('lg')} {
    height: 82px;
  }
`;

const Hamburger = styled(_Hamburger)`
  display: flex;
  position: relative;
  right: 0;
  top: 0;

  ${mediaBreakpointUp('lg')} {
    display: none;
  }
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
      &:not(:last-child) {
        ${mediaBreakpointUp('lg')} {
          margin-right: 1rem;
        }

        ${mediaBreakpointUp('xl')} {
          margin-right: 4rem;
        }
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
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1.2;
  position: relative;
  text-transform: uppercase;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.2rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.8rem;
    margin-right: 1rem;
  }

  ${mediaBreakpointUp('xl')} {
    margin-right: 0;
  }

  &::before {
    background-color: ${props => props.theme.red};
    content: ' ';
    display: block;
    flex: 0 0 3px;
    height: 44px;
    left: 0;
    margin: 0 1.5rem;
    top: 0;
    width: 3px;

    ${mediaBreakpointUp('md')} {
      margin: 0 4.4rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 1.5rem;
    }

    ${mediaBreakpointUp('xl')} {
      margin: 0 2.7rem;
    }
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
        <BrandWrap>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/takeda-logo.png`} />
          </Link>
          <Tag>HAE Virtual Lab</Tag>
        </BrandWrap>
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
