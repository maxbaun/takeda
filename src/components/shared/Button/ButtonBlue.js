import {darken} from 'polished';
import styled from 'styled-components';

import Button from './Button';

const ButtonBlue = styled(Button)`
  background-color: ${props => props.theme.blue};
  border: 1px solid ${props => props.theme.blue};
  color: #fff;

  &:hover {
    background-color: ${props => darken(0.05, props.theme.blue)};
    border-color: ${props => darken(0.05, props.theme.blue)};
  }
`;

export default ButtonBlue;
