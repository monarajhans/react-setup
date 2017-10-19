import { combineReducers } from 'redux';
import changeUserReducer from './user/changeUserReducer';

const combinedReducers = combineReducers({
  user: combineReducers({
    name: changeUserReducer,
  }),
});

export default combinedReducers;
