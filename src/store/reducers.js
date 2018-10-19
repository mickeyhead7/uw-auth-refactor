import { combineReducers } from 'redux';
import auth from 'Auth/store/reducers';
import page from 'Page/store/reducers';

export default combineReducers({
  auth,
  page,
});
