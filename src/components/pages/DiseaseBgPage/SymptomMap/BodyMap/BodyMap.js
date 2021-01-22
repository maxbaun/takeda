import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import imgDefaultBody from './defaultBody.png';
import HotSpot from './HotSpot';

const ActiveImg = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const BaseImg = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 677px;
  margin: 0 auto;
  position: relative;
  width: 280px;
`;

const BodyMap = ({activeIndex, data, onToggle: handleToggle, ...props}) => {
  return (
    <Wrapper {...props}>
      <BaseImg src={imgDefaultBody} />
      {data &&
        data.map((item, index) => (
          <span key={index}>
            {activeIndex === index ? <ActiveImg src={item.body} /> : null}

            <HotSpot
              color={item.color}
              isActive={activeIndex === index}
              onClick={() => handleToggle(index)}
              x={item.x}
              y={item.y}
            />
          </span>
        ))}
    </Wrapper>
  );
};

BodyMap.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ),
  onToggle: PropTypes.func.isRequired
};

export default BodyMap;
