import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import './styles/index.css';

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
