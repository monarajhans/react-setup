import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../combinedReducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    combinedReducers,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant)
  );
}
