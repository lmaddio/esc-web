import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {watcherListActionsSaga, watcherListSaga} from './sagas'

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers, 
  composeEnhancers(
      applyMiddleware(sagaMiddleware)
  )
);


sagaMiddleware.run(watcherListSaga);
sagaMiddleware.run(watcherListActionsSaga);