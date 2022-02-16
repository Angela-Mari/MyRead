import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import post from './post';

export default combineReducers({
  auth,
  alert,
  post,
});
