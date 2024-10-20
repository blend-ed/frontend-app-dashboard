import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY,
  initialize,
  mergeConfig,
  subscribe
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import messages from './i18n';

import AllRoutes from './AllRoutes';
import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <AllRoutes />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  handlers: {
    config: () => {
      mergeConfig({
        DASHBOARD_URL: process.env.DASHBOARD_URL,
        STAFF_DASHBOARD_URL: process.env.STAFF_DASHBOARD_URL,
      }, 'DashboardAppConfig');
    }
  },
  messages,
});
