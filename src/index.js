import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'slick-carousel/slick/slick.css';
import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import AboutPage from './components/pages/AboutPage';
import Home from './components/pages/Home';
import ManagementPage from './components/pages/ManagementPage';
import SimulatorPage from './components/pages/SimulationPage';
import Root from './components/Root';
import ScrollToTop from './components/shared/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import routes from './routes';
import GlobalStyle from './styles';
import theme from './theme';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ScrollToTop />
      <Root>
        <Switch>
          <Route exact component={Home} path={routes.Home} />
          <Route exact component={AboutPage} path={routes.About} />
          <Route exact component={ManagementPage} path={routes.Management} />
          <Route exact component={SimulatorPage} path={routes.Simulator} />
        </Switch>
      </Root>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
