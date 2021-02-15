import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routes';
import {mediaBreakpointUp} from '../../../utils/responsive';
import Dropdown from '../../shared/Dropdown';
import ExternalLink from '../../shared/ExternalLink';
import _Hamburger from '../../shared/Hamburger';
import Icon from '../../shared/Icon';
import Logo from '../../shared/Logo';
import Nav from './Nav';

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

  svg {
    /* height: 54px; */
    max-width: 159px;
    width: 100%;

    ${mediaBreakpointUp('sm')} {
      height: auto;
      width: 159px;
    }

    ${mediaBreakpointUp('lg')} {
      height: auto;
      width: 10vw;
    }

    ${mediaBreakpointUp('xl')} {
      height: auto;
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
  position: relative;
  margin: 0 auto;
  max-width: 1505px;

  ${mediaBreakpointUp('lg')} {
    height: 82px;
  }
`;

const Hamburger = styled(_Hamburger)`
  display: flex;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  z-index: 4;

  ${mediaBreakpointUp('lg')} {
    display: none;
  }
`;

const Tag = styled.span`
  align-items: center;
  display: flex;
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1;
  position: relative;
  text-transform: uppercase;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.2rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.5vw;
    margin-right: 0.5rem;
  }

  ${mediaBreakpointUp('xl')} {
    font-size: 1.8rem;
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
      margin: 0 1vw;
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

  const handleLinkClick = () => setNavOpen(false);

  return (
    <Wrapper {...props}>
      <Container>
        <BrandWrap>
          <Link onClick={handleLinkClick} to={routes.Home}>
            <Logo />
          </Link>
          <Tag>HAE Virtual Lab</Tag>
        </BrandWrap>
        <Nav isOpen={navOpen}>
          <ul>
            <li>
              <NavLink className="has-chevron" onClick={handleLinkClick} to={routes.HaeDiseaseBg}>
                <span>HAE Disease Background</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="has-chevron" onClick={handleLinkClick} to={routes.Management}>
                <span>Management of HAE</span>
              </NavLink>
            </li>
            <li>
              <ExternalLink className="btn" href="https://google.com" onClick={handleLinkClick}>
                <span>Back to HAE CONNECT</span>
                <Icon icon="external-link-alt" />
              </ExternalLink>
            </li>
            <Dropdown as="li" id="languageSelector">
              <Dropdown.Toggle className="btn" onClick={handleLinkClick} title="Change Language">
                <span>ENG</span>
                <Icon icon="chevron-down" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <ul>
                  <li>
                    <a href="/">English</a>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </Nav>
        <Hamburger onClick={() => setNavOpen(!navOpen)} open={navOpen} />
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
