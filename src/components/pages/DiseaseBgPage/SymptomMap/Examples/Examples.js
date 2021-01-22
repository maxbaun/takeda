import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Disclaimer = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.35;
  margin: 2.5rem 0 0;
`;

const Note = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.31;
  margin: 1.8rem 0 1rem;
`;

const Images = styled.div`
  display: flex;
  height: 143px;

  img {
    width: 143px;

    &:not(:last-child) {
      margin-right: 1.3rem;
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
