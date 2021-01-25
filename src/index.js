import 'bootstrap/dist/css/bootstrap-grid.css';
import 'slick-carousel/slick/slick.css';
import 'modaal/dist/css/modaal.min.css';
import 'modaal/dist/js/modaal';
import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import DiseaseBgPage from './components/pages/DiseaseBgPage';
import Home from './components/pages/Home';
import ManagementPage from './components/pages/ManagementPage';
import SimulatorPage from './components/pages/SimulationPage';
import Root from './components/Root';
import reportWebVitals from './reportWebVitals';
import routes from './routes';
import GlobalStyle from './styles';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact component={Home} path={routes.Home} />
            <Route exact component={DiseaseBgPage} path={routes.HaeDiseaseBg} />
            <Route exact component={ManagementPage} path={routes.Management} />
            <Route exact component={SimulatorPage} path={routes.Simulator} />
          </Switch>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
