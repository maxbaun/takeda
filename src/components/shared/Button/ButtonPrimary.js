import styled from 'styled-components';

import Button from './Button';

const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.redDark};
  border-color: ${props => props.theme.redDark};
  color: #fff;

  &:hover {
    background-color: ${props => props.theme.redDarker};
  }
`;

export default ButtonPrimary;
