import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import createRoutes from 'routes';
import 'styles/global-styles.scss';

import browserHistory from 'browserHistory';

export const routes = createRoutes();

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
