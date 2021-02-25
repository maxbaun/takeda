import {createGlobalStyle} from 'styled-components';

import {mediaBreakpointUp} from '../utils/responsive';

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
      color: ${props => props.theme.red};
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
    inset: 0 !important;
    max-width: calc(100% - 30px) !important;
    padding: 60px 0 20px !important;
    opacity: 0;
    transition: opacity 300ms 200ms ease-in-out;

    ${mediaBreakpointUp('lg')} {
      max-width: calc(100% - 80px) !important;
      padding-left: 15px !important;
      padding-right: 15px !important;
      padding-top: 80px !important;
    }

    @media screen and (min-height: 1000px) {
      /* inset: 160px 25px !important; */
      padding: 60px 15px;
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
