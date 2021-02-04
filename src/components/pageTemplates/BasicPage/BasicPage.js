import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4rem 0;
`;

const BasicPage = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

BasicPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default BasicPage;
