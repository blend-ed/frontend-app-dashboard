import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY,
  initialize,
  subscribe,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import messages from './i18n';
import { Provider } from 'react-redux';

import AllRoutes from './AllRoutes';
import './index.scss';
import store from './store';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});
