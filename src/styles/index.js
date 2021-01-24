import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .accent {
    color: ${props => props.theme.redAccent};
    font-weight: 700;
  }
`;

export default GlobalStyle;
