import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .accent {
    color: ${props => props.theme.redAccent};
    font-weight: 700;
  }

  a:not(.btn) {
    color: #000;
    font-weight: 700;
    text-decoration: underline;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.redDark};
    }
  }
  
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .ReactModal__Content {
    inset: 80px 25px !important;
    opacity: 0;
    transition: opacity 300ms 200ms ease-in-out;

    @media screen and (max-height: 1000px) {
      inset: 60px 25px !important;
    }
  }

  .ReactModal__Content--after-open {
    opacity: 1;
  }

  .ReactModal__Content--before-close{
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Close {
    border: none;
    background: transparent;
    padding: 0;
    -webkit-appearance: none;
  }

`;

export default GlobalStyle;
