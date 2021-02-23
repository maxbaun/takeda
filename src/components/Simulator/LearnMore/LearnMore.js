import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';
import data from './data';
import Dropdown from './Dropdown';

const Toggles = styled.div`
  margin: 0 auto;
  max-width: 320px;

  ${mediaBreakpointUp('sm')} {
    max-width: 425px;
  }

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    max-width: 260px;
  }
`;

const Title = styled.span`
  font-size: 1.6rem;
  display: block;
  margin: 0 0 3rem;
  text-align: center;
  width: 100%;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 4.3rem;
  }

  ${mediaBreakpointUp('lg')} {
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    letter-spacing: 0.1em;
    line-height: 1.68;
    padding: 0.5em 2rem;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  z-index: 1;

  ${mediaBreakpointUp('lg')} {
    margin: 0;
    position: absolute;
    right: 0;
    top: 2rem;
    width: 280px;
  }
`;

const LearnMore = ({activeIndex, onActiveIndexChange: handleActiveIndexChange, ...props}) => {
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
              onClick={() => (isOpen ? handleActiveIndexChange(-1) : handleActiveIndexChange(index))}
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

LearnMore.propTypes = {
  activeIndex: PropTypes.number,
  onActiveIndexChange: PropTypes.func
};

export default LearnMore;
