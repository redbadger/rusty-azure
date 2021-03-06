import 'normalize.css';
import { hydrate, render } from 'react-dom';
import React from 'react';

import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Routes from './routes';

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
}
