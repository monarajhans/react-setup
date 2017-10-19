import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import combinedReducers from '../reducers/combinedReducers';
import { createLogger } from 'redux-logger';
import initialAdvisorState from './initialStates/initialUserState';

export default(props) => {
    const initialState = {
      name: 'Mona'
    };
    let middleware;
    if (process.env.NODE_ENV === `development`) {
      middleware = applyMiddleware(createLogger());
    } else {
      middleware = applyMiddleware();
    }
    const composedStore = compose(middleware);
    return composedStore(createStore)(combinedReducers, initialState);
};
