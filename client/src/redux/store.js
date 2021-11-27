import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga';

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

// An array
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

// Spread the array of middleware
export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const DefaultObj = { store, persistor };

export default DefaultObj;