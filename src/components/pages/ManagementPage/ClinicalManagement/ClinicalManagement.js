import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

import {listUnstyled} from '../../../../utils/lists';
import {mediaBreakpointUp} from '../../../../utils/responsive';
import Video from '../../../shared/Video';
import imgDotPattern from './dot-pattern-clinical-management.png';
import imgDotPatternMobile from './dot-pattern-clinical-management-mobile.png';

const Content = styled.div`
  border: 0px dashed #c5cbcf;
  border-top-width: 1px;
  padding-top: 6.2rem;
  -ms-grid-column: 3;
  -ms-grid-row: 3;

  ${mediaBreakpointUp('sm')} {
    padding-top: 9.2rem;
  }

  ${mediaBreakpointUp('lg')} {
    border-left-width: 1px;
    border-top-width: 0;
    padding-left: 11%;
    padding-top: 0;
    min-height: 632px;
  }

  ${mediaBreakpointUp('xl')} {
    padding-left: 18.3rem;
  }
`;

const Content__Inner = styled.div`
  height: 100%;
  position: relative;

  ${mediaBreakpointUp('lg')} {
    max-width: 544px;
  }
`;

const Content__Item = styled.div`
  align-items: ${props => (props.centered ? 'center' : 'initial')};
  display: ${props => (props.centered ? 'flex' : 'block')};

  > div {
    > h5 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.33;

      ${mediaBreakpointUp('sm')} {
        font-size: 2.4rem;
        margin: 0 0 3.4rem;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 1.6rem;
        margin: 0 0 2.8rem;
      }
    }

    > p {
      line-height: 1.35;
      margin: 0 0 2rem;

      ${mediaBreakpointUp('sm')} {
        font-size: 2.8rem;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 1.6rem;
        line-height: 1.625;
      }
    }
  }
`;

const Content__Video = styled.div`
  margin: 6.8rem 0 0;

  ${mediaBreakpointUp('sm')} {
    margin: 9.8rem 0 0;
    max-width: 100%;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 6.6rem 0 0;
    max-width: 465px;
  }
`;

const Inner = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1300px;

  ${mediaBreakpointUp('lg')} {
    grid-row-gap: 7.3rem;
    grid-column-gap: 6.5rem;
    grid-template-columns: 420px auto;
    grid-template-rows: auto auto;
    -ms-grid-rows: 0.3fr 73px 2fr;
    -ms-grid-columns: 420px 65px 1fr;
  }

  ${mediaBreakpointUp('xl')} {
    /* grid-column-gap: 183px; */
  }
`;

const Menu__Button = styled.button`
  align-items: center;
  background: none;
  border: 3px solid ${props => (props.isActive ? props.theme[props.color] : 'transparent')};
  border-radius: 50px;
  box-sizing: border-box;
  color: ${props => props.theme.blue};
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  line-height: 1;
  margin-left: auto;
  min-width: 280px;
  padding: 1rem 3.4rem 1.2rem 1.5rem;
  position: relative;
  transition: border-color 0.2s ease-in-out;

  ${mediaBreakpointUp('sm')} {
    border-radius: 50px;
    font-size: 3rem;
    padding: 1.6rem 3.4rem 1.9rem 1.8rem;
    width: 468px;
  }

  ${mediaBreakpointUp('lg')} {
    border-radius: 30px;
    font-size: 1.8rem;
    padding: 0.8rem 3.1rem 1rem 1.3rem;
    width: auto;
  }

  span {
    background-color: ${props => props.theme[props.color]};
    border-radius: 50%;
    height: 15px;
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
    width: 15px;

    ${mediaBreakpointUp('sm')} {
      height: 25px;
      width: 25px;
    }

    ${mediaBreakpointUp('lg')} {
      height: 15px;
      width: 15px;
    }
  }

  &:hover {
    border-color: ${props => props.theme[props.color]};
  }
`;

const Menu = styled.div`
  margin: 0 0 4rem;
  text-align: right;
  -ms-grid-column: 1;
  -ms-grid-row: 3;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 5rem;
  }

  ${mediaBreakpointUp('lg')} {
    padding-top: 10.2rem;
    margin: 0;
  }

  > h2 {
    margin: 4rem 3.7rem 3rem 0;

    ${mediaBreakpointUp('sm')} {
      margin: 9.7rem 3.7rem 5.1rem 0;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 6.4rem;
      padding-right: 0;
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
  -ms-grid-column: 1;

  /* ${mediaBreakpointUp('lg')} {
    padding-right: 6.5rem;
  } */

  h1 {
    margin: 0 3.7rem 0 0;

    ${mediaBreakpointUp('sm')} {
      margin: 0 3.7rem 0 0;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0;
      padding-right: 0;
    }
  }
`;

const Wrapper = styled.div`
  background-image: ${() => `url(${imgDotPatternMobile})`};
  background-position: 100% -40px;
  background-repeat: no-repeat;
  background-size: 20% auto;
  padding: 8rem 0 8.1rem;

  ${mediaBreakpointUp('sm')} {
    background-position: 100% 0;
    background-size: auto;
    padding: 14rem 0 14.1rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url(${imgDotPattern})`};
    padding: 11.3rem 0 13.5rem;
  }

  .container {
    ${mediaBreakpointUp('lg')} {
      max-width: 1300px;
    }
  }
`;

const ClinicalManagement = ({data, pageTitle, title, ...props}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>
          <PageTitle>{pageTitle}</PageTitle>
          <div style={{msGridColumn: 2}} />
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
                    // opacity: index === activeIndex ? 1 : 0,
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
      </div>
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
