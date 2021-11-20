import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import sagas from './sagas/sagas';

const sagaMiddleWare = createSaga();

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(sagaMiddleWare),
    composeWithDevTools()
  )
);

sagaMiddleWare.run(sagas);

export default store;