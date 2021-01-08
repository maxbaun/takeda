import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer``;

const Footer = ({...props}) => {
  return <Wrapper {...props}>footer</Wrapper>;
};

Footer.propTypes = {};

export default Footer;
