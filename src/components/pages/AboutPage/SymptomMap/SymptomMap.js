import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import InViewSection from '../../../shared/InViewSection';
import _BodyMap from './BodyMap';
import data from './data';
import _Description from './Description';
import imgDotPattern from './dot-pattern-symptom-map.png';
import Examples from './Examples';

const BodyMap = styled(_BodyMap)`
  -ms-grid-column: 2;
`;

const Content = styled.div`
  margin: 0 0 6rem;
  text-align: right;
  -ms-grid-column: 1;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 12.7rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin-bottom: 0;
    margin-left: auto;
    max-width: 260px;
  }

  h2 {
    margin: 0 0 2.2rem;

    ${mediaBreakpointUp('sm')} {
      margin: 0 0 3.6rem;
    }

    ${mediaBreakpointUp('lg')} {
      margin: 0 0 2.2rem;
    }
  }
`;

const Description = styled(_Description)`
  background-color: #fff;
  left: 0;
  padding: 5rem 0;
  top: 0;

  ${mediaBreakpointUp('lg')} {
    padding: 0;
  }
`;

const DescriptionTitleWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 2.5rem;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 4rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0 0 2.5rem;
  }

  button {
    ${mediaBreakpointUp('lg')} {
      display: none;
    }
  }
`;

const DescriptionWrap = styled.div`
  left: 0;
  width: 100%;
  z-index: 2;
  -ms-grid-column: 3;

  ${mediaBreakpointUp('lg')} {
    background-color: transparent;
    padding: 0;
    position: relative;
    top: 0;
  }

  .container {
    ${mediaBreakpointUp('lg')} {
      padding: 0;
    }
  }
`;

const ExamplesMobile = styled.div`
  margin: 0 0 4.2rem;

  ${mediaBreakpointUp('lg')} {
    display: none;
  }
`;

const ExamplesDesktop = styled.div`
  display: none;
  margin: 5rem 0 0;

  ${mediaBreakpointUp('lg')} {
    display: block;
  }
`;

const HelpCircle = styled.div`
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 50%;
  color: ${props => props.theme.blue};
  display: none;
  font-size: 1.6rem;
  height: 233px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  justify-content: center;
  line-height: 1.68;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 233px;
  z-index: -1;

  ${mediaBreakpointUp('lg')} {
    display: flex;
  }
`;

const Inner = styled.div`
  align-items: center;
  display: grid;

  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 50px;
    grid-template-columns: 260px auto 30%;
    -ms-grid-columns: 260px 1fr 30%;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 80px;
    grid-template-columns: 1fr auto 1fr;
    -ms-grid-columns: 1fr 2fr 1fr;
    min-height: 725px;
  }
`;

const Wrapper = styled.div`
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 6.8rem 0 5.7rem;
  position: relative;

  ${mediaBreakpointUp('sm')} {
    padding: 12.8rem 0 17.7rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url(${imgDotPattern})`};
    padding: 5.2rem 0 5.7rem;
  }
`;

const SymptomMap = ({children, ...props}) => {
  const elDescription = useRef();
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = index => {
    if (activeIndex === index) {
      return setActiveIndex(-1);
    }

    setActiveIndex(index);

    // On mobile, scroll the description element
    if (window.innerWidth < 992) {
      elDescription.current.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // return activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);
  };

  const examples = data.map((item, index) => (
    <Examples
      images={item.exampleImages}
      key={index}
      note={item.exampleNote}
      style={{
        display: activeIndex === index ? 'block' : 'none'
      }}
    />
  ));

  return (
    <InViewSection>
      <Wrapper {...props}>
        <div className="container">
          <Inner>
            <Content className="fade-in-content bottom">
              {children}
              <ExamplesDesktop>{examples}</ExamplesDesktop>
            </Content>
            <BodyMap activeIndex={activeIndex} className="fade-in-media" data={data} onToggle={handleToggle} />
            <DescriptionWrap ref={elDescription}>
              {data.map((item, index) => (
                <Description
                  color={item.color}
                  key={index}
                  image={item.descriptionImage?.src}
                  imageCaption={item.descriptionImage?.caption}
                  // title={item.title}
                  style={{display: activeIndex === index ? 'block' : 'none'}}
                >
                  <ExamplesMobile>{examples}</ExamplesMobile>
                  <DescriptionTitleWrap>
                    <_Description.Title color={item.color}>{item.title}</_Description.Title>
                  </DescriptionTitleWrap>
                  {item.description || null}
                </Description>
              ))}
              <HelpCircle>
                Click on “+”
                <br /> to learn more
              </HelpCircle>
            </DescriptionWrap>
          </Inner>
        </div>
      </Wrapper>
    </InViewSection>
  );
};

SymptomMap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default SymptomMap;
