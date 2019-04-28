import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {App} from './components/App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
