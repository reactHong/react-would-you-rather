import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Circles, LoaderProvider } from '@agney/react-loading';
import reducer from './reducer';
import middleware from './middleware';
import App from './components/App';

import "./index.scss";

const store = createStore(reducer, middleware);
const pStore = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={pStore}>
        <LoaderProvider indicator={<Circles width="50" />}>
          <App />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

