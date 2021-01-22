import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../utils/responsive';
import BodyMap from './BodyMap';
import data from './data';
import _Description from './Description';
import _Examples from './Examples';

const Content = styled.div`
  text-align: right;

  ${mediaBreakpointUp('lg')} {
    max-width: 260px;
  }

  h2 {
    margin: 0 0 2.2rem;
  }
`;

const Description = styled(_Description)`
  background-color: #fff;
  left: 0;
  top: 0;
`;

const DescriptionWrap = styled.div`
  position: relative;
`;

const Examples = styled(_Examples)`
  margin: 5rem 0 0;
`;

const HelpCircle = styled.div`
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 50%;
  color: ${props => props.theme.blue};
  display: flex;
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
`;

const Inner = styled.div`
  align-items: center;
  display: grid;
  ${mediaBreakpointUp('lg')} {
    grid-column-gap: 50px;
    grid-template-columns: 260px auto 24%;
  }

  ${mediaBreakpointUp('xl')} {
    grid-column-gap: 80px;
    grid-template-columns: 260px auto 386px;
    min-height: 725px;
  }
`;

const Wrapper = styled.div`
  padding: 6.8rem 0 5.7rem;
`;

const SymptomMap = ({children, ...props}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = index => {
    return activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);
  };

  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner>
          <Content>
            {children}
            {data.map((item, index) => (
              <Examples
                images={item.exampleImages}
                key={index}
                note={item.exampleNote}
                style={{display: activeIndex === index ? 'block' : 'none'}}
              />
            ))}
          </Content>
          <BodyMap activeIndex={activeIndex} data={data} onToggle={handleToggle} />
          <DescriptionWrap>
            {data.map((item, index) => (
              <Description
                color={item.color}
                key={index}
                image={item.descriptionImage?.src}
                imageCaption={item.descriptionImage?.caption}
                title={item.title}
                style={{display: activeIndex === index ? 'block' : 'none'}}
              >
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
  );
};

SymptomMap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default SymptomMap;
