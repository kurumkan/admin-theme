import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from 'components/App';
import NotFound from 'pages/NotFound';

const createRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="search" />} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default createRoutes;
