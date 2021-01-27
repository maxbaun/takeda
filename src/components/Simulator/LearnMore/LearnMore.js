import React, {useState} from 'react';
import styled from 'styled-components';

import data from './data';
import Dropdown from './Dropdown';

const Toggles = styled.div`
  max-width: 260px;
`;

const Title = styled.span`
  background-color: #fff;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  display: block;
  letter-spacing: 0.1em;
  line-height: 1.68;
  padding: 0.5em 2rem;
  width: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 2rem;
  width: 280px;
  z-index: 1;
`;

const LearnMore = ({...props}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <Wrapper {...props}>
      <Title>Click on “+” to learn more</Title>
      <Toggles>
        {data.map((item, index) => {
          const isOpen = index === activeIndex;

          return (
            <Dropdown
              isOpen={isOpen}
              key={index}
              onClick={() => (isOpen ? setActiveIndex(-1) : setActiveIndex(index))}
              title={item.title}
            >
              {item.description}
            </Dropdown>
          );
        })}
      </Toggles>
    </Wrapper>
  );
};

export default LearnMore;
