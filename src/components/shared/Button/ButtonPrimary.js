import styled from 'styled-components';

import Button from './Button';

const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.red};
  border-color: ${props => props.theme.red};
  color: #fff;

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.red};
  }
`;

export default ButtonPrimary;
