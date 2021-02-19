import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../../../utils/responsive';

const Disclaimer = styled.p`
  font-size: 1.6rem;
  font-style: italic;
  line-height: 1.35;
  margin: 0 !important;

  ${mediaBreakpointUp('sm')} {
    font-size: 2rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
  }
`;

const Note = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.31;
  margin: 0 0 1rem;

  ${mediaBreakpointUp('sm')} {
    font-size: 2.2rem;
    margin: 0 0 2rem;
  }

  ${mediaBreakpointUp('lg')} {
    font-size: 1.4rem;
    margin: 0 0 1rem;
  }
`;

const Images = styled.div`
  display: flex;
  margin: 0 0 3.3rem;

  ${mediaBreakpointUp('sm')} {
    margin: 0 0 4.3rem;
  }

  ${mediaBreakpointUp('lg')} {
    height: 143px;
    margin: 0 0 1.8rem;
  }

  img {
    height: auto;
    max-width: 222px;

    ${mediaBreakpointUp('sm')} {
      width: 222px;
    }

    ${mediaBreakpointUp('lg')} {
      width: 143px;
    }

    &:not(:last-child) {
      margin-right: 2rem;
      ${mediaBreakpointUp('lg')} {
        margin-right: 1.3rem;
      }
    }

    &:only-child {
      flex: 0;
      margin: 0 auto;
    }
  }
`;

const Wrapper = styled.div`
  text-align: left;
`;
const Examples = ({images, note, ...props}) => {
  return (
    <Wrapper {...props}>
      <Images>{images && images.map((image, index) => <img key={index} src={image} />)}</Images>
      {note ? <Note>{note}</Note> : null}

      {images && (
        <Disclaimer>
          These are not real patients but actors with prosthetic make-up. Takeda owns the rights to these images.
        </Disclaimer>
      )}
    </Wrapper>
  );
};

Examples.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  note: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default Examples;
