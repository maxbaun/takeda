import styled from 'styled-components';

import Button from './Button';

const ButtonEmpty = styled(Button)`
  background-color: #fff;
  border-color: #000;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default ButtonEmpty;
