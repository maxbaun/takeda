import {darken} from 'polished';
import styled from 'styled-components';

import Button from './Button';

const ButtonGray = styled(Button)`
  background-color: ${props => props.theme.solitude2};
  border: 1px solid ${props => props.theme.solitude2};
  color: #000;

  &:hover {
    background-color: ${props => darken(0.05, props.theme.solitude2)};
    border-color: ${props => darken(0.05, props.theme.solitude2)};
  }
`;

export default ButtonGray;
