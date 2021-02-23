import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Inner = styled.div`
  border-top: ${props => (props.showBorder ? '1px dashed #c5cbcf' : 'none')};
  padding: 7rem 0;
`;

const Wrapper = styled.div`
  font-size: 1.4rem;
  line-height: 1.71;

  p {
    margin: 0 auto 1rem;
    max-width: 940px;
  }
`;

const References = ({children, showBorder, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        <Inner showBorder={showBorder}>
          <p>
            <strong>References: </strong>
            {children}
          </p>
        </Inner>
      </div>
    </Wrapper>
  );
};

References.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  showBorder: PropTypes.bool
};

References.defaultProps = {
  showBorder: true
};

export default References;
