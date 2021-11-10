import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// An array
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

// Spread the array of middleware
export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

const DefaultObj = { store, persistor };

export default DefaultObj;