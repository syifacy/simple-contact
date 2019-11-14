import { createStore, applyMiddleware , compose } from 'redux';
import reducers from './Reducers';
import createSagaMiddleware from 'redux-saga';

import rootSagas  from './Sagas'

const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
  const store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware),
    );

  sagaMiddleware.run(rootSagas);
  
export default store; 