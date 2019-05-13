import { combineReducers } from 'redux';
import AppReducer from './screens/App/reducer';


export default combineReducers({
  app: AppReducer,
});
