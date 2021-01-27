import {darken} from 'polished';
import styled from 'styled-components';

import Button from './Button';

const ButtonGreen = styled(Button)`
  background-color: ${props => props.theme.green};
  border: 1px solid ${props => props.theme.green};
  color: #fff;

  &:hover,
  &.selected:hover {
    background-color: ${props => darken(0.05, props.theme.green)};
    border-color: ${props => darken(0.05, props.theme.green)};
  }

  &.active {
    background-color: ${props => props.theme.greenDark};
    border-color: ${props => props.theme.greenDark};
    outline: none;
  }
`;

export default ButtonGreen;
