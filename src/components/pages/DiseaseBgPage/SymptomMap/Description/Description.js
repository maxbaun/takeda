import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../../utils/responsive';

const Title = styled.h3`
  border: 2px solid ${props => props.theme[props.color]};
  background-color: ${props => props.theme[`${props.color}--active`]};
  border-radius: 40px;
  color: ${props => (props.color === 'blue' ? '#fff' : '#19262e')};
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 1rem 3rem;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.8rem;
    padding: 1.8rem 6rem 1.8rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.8rem;
    padding: 1rem 3rem;
  }
`;

const Wrapper = styled.div`
  font-size: 1.8rem;
  line-height: 1.35;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.8rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    line-height: 1.71;
  }

  p {
    margin: 0 0 1.3em;
  }

  figure {
    margin: 0;

    img {
      display: block;
      margin: 3rem 0 0;

      ${mediaBreakpointUp('sm')} {
        margin: 4.7rem 0 0;
      }

      ${mediaBreakpointUp('lg')} {
        margin: 0;
      }
    }

    figcaption {
      display: block;
      font-size: 1.7rem;
      font-style: italic;
      line-height: 1.35;
      margin: 3.1rem 0 0;
      text-align: left;

      ${mediaBreakpointUp('lg')} {
        font-size: 2.1rem;
      }

      ${mediaBreakpointUp('lg')} {
        font-size: 1.4rem;
        margin: 2.5rem 0 0;
      }
    }
  }
`;

const Description = ({children, color, image, imageCaption, title, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        {title ? <Title color={color}>{title}</Title> : null}
        {children}
        {image ? (
          <figure>
            <img src={image} />
            <figcaption>{imageCaption}</figcaption>
          </figure>
        ) : null}
      </div>
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

Description.Title = Title;

export default Description;
