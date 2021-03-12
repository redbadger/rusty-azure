import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import ErrorPage from '../pages/error-page';
import HomePage from '../pages/home';
import PresentationPage from '../pages/presentation';
import React from 'react';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const Routes = () => (
  <CustomBrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/presentation" component={PresentationPage} />
      <Route path="/*" component={ErrorPage} />
    </Switch>
  </CustomBrowserRouter>
);

export default Routes;
