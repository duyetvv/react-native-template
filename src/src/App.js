// /** @format */

import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();

export default RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
