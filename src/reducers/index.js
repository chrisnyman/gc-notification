import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import notifications from './notifications';

const rootReducer = combineReducers({
  routing: routerReducer,
  notifications
});

export default rootReducer;
