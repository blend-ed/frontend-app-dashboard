import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  ApolloClient, ApolloProvider, InMemoryCache,
} from '@apollo/client';

import {
  APP_INIT_ERROR, APP_READY,
  getConfig,
  initialize,
  subscribe,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import messages from './i18n';

import AllRoutes from './AllRoutes';
import './index.scss';

subscribe(APP_READY, () => {
  const uri = getConfig().DDN_GRAPHQL_URL;
  console.log('uri', uri);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: uri,
    credentials: 'include',
  });

  ReactDOM.render(
    <AppProvider>
      <ApolloProvider client={client}>
        <AllRoutes />
      </ApolloProvider>
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
