import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store/index';
import {BrowserRouter as Router} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
         <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
