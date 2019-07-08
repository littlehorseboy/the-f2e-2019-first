import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Router from './router/Router';
import store from './reducers/configureStore';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
