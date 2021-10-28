import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// An array
const middleware = [logger];

// Spread the array of middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;