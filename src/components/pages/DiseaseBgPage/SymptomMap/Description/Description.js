import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  border: 2px solid ${props => props.theme[props.color]};
  background-color: ${props => props.theme[`${props.color}--active`]};
  border-radius: 40px;
  color: #fff;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 0 2.5rem;
  padding: 1rem 3rem;
`;

const Wrapper = styled.div`
  font-size: 1.4rem;
  line-height: 1.71;

  p {
    margin: 0 0 1.3em;
  }

  figure {
    margin: 0;

    img {
    }

    figcaption {
      display: block;
      font-size: 1.4rem;
      font-style: italic;
      line-height: 1.35;
      margin: 2.5rem 0 0;
      text-align: left;
    }
  }
`;

const Description = ({children, color, image, imageCaption, title, ...props}) => {
  return (
    <Wrapper {...props}>
      {title ? <Title color={color}>{title}</Title> : null}
      {children}
      {image ? (
        <figure>
          <img src={image} />
          <figcaption>{imageCaption}</figcaption>
        </figure>
      ) : null}
    </Wrapper>
  );
};

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  color: PropTypes.oneOf(['yellow', 'green', 'blue']),
  image: PropTypes.string,
  imageCaption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Description;
