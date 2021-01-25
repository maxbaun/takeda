import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import Video from '../../../shared/Video';
import imgDotPattern from './dot-pattern-clinical-management.png';

const Content = styled.div`
  border-left: 1px dashed #c5cbcf;

  ${mediaBreakpointUp('lg')} {
    padding-left: 11%;
    min-height: 632px;
  }

  ${mediaBreakpointUp('xl')} {
    padding-left: 18.3rem;
  }
`;

const Content__Inner = styled.div`
  height: 100%;

  ${mediaBreakpointUp('lg')} {
    max-width: 544px;
  }
`;

const Content__Item = styled.div`
  align-items: ${props => (props.centered ? 'center' : 'initial')};
  display: ${props => (props.centered ? 'flex' : 'block')};

  > div {
    > p {
      margin: 0 0 2rem;

      ${mediaBreakpointUp('lg')} {
        font-size: 1.6rem;
        line-height: 1.625;
      }
    }
  }
`;

const Content__Video = styled.div`
  ${mediaBreakpointUp('lg')} {
    margin: 6.6rem 0 0;
    max-width: 465px;
  }
`;

const Inner = styled.div`
  display: grid;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1300px;

  ${mediaBreakpointUp('lg')} {
    grid-row-gap: 7.3rem;
    grid-column-gap: 6.5rem;
    grid-template-columns: 420px auto;
    grid-template-rows: auto auto;
  }

  ${mediaBreakpointUp('xl')} {
    /* grid-column-gap: 183px; */
  }
`;

const Menu__Button = styled.button`
  align-items: center;
  background: none;
  border: 3px solid ${props => (props.isActive ? props.theme[props.color] : 'transparent')};
  border-radius: 30px;
  box-sizing: border-box;
  color: ${props => props.theme.blue};
  cursor: pointer;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  line-height: 1.4;
  margin-left: auto;
  min-width: 280px;
  padding: 0.4rem 3.1rem 0.4rem 1.3rem;
  position: relative;
  transition: border-color 0.2s ease-in-out;

  span {
    background-color: ${props => props.theme[props.color]};
    border-radius: 50%;
    height: 15px;
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
    width: 15px;
  }

  &:hover {
    border-color: ${props => props.theme[props.color]};
  }
`;

const Menu = styled.div`
  text-align: right;

  ${mediaBreakpointUp('lg')} {
    padding-top: 10.2rem;
  }

  > h2 {
    ${mediaBreakpointUp('lg')} {
      margin: 0 0 6.4rem;
    }
  }

  > ul {
    ${listUnstyled()}

    > li {
      margin: 1.8rem 0;
    }
  }
`;

const PageTitle = styled.div`
  text-align: right;

  /* ${mediaBreakpointUp('lg')} {
    padding-right: 6.5rem;
  } */

  h1 {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPattern})`};
  background-repeat: no-repeat;
  background-position: 100% 0;
  padding: 5rem 7rem;

  ${mediaBreakpointUp('lg')} {
    padding: 11.3rem 0 13.5rem;
  }
`;

const ClinicalManagement = ({data, pageTitle, title, ...props}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper {...props}>
      <Inner>
        <PageTitle>{pageTitle}</PageTitle>
        <div />
        <Menu>
          {title}
          <ul>
            {data.map((menuItem, index) => (
              <li key={index}>
                <Menu__Button
                  color={menuItem.color}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="dot" />
                  {menuItem.title}
                </Menu__Button>
              </li>
            ))}
          </ul>
        </Menu>
        <Content>
          <Content__Inner>
            {data.map((item, index) => (
              <Content__Item
                centered={item.centered}
                key={index}
                style={{
                  display: index === activeIndex ? (item.centered ? 'flex' : 'block') : 'none',
                  height: item.centered ? '100%' : 'auto'
                }}
              >
                <div>
                  {item.description}
                  {item.video ? (
                    <Content__Video>
                      <Video {...item.video} />
                    </Content__Video>
                  ) : null}
                </div>
              </Content__Item>
            ))}
          </Content__Inner>
        </Content>
      </Inner>
    </Wrapper>
  );
};

ClinicalManagement.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      video: PropTypes.object
    })
  ),
  pageTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default ClinicalManagement;
