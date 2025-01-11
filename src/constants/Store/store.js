/**
 * @module store
 * @description Configures the Redux store with reducers and middleware.
 * The store is enhanced with `redux-saga` for handling side effects and `redux-logger` for logging actions.
 * The store also runs the `watchValidateTokenSaga` to listen for token validation actions.
 */

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import registerReducer from '../actions/reducers/registerReducer';
import loginReducer from '../actions/reducers/loginReducer';
import authSaga, { watchValidateTokenSaga } from '../auth/authSaga';

/**
 * Creates the saga middleware instance.
 * This middleware will handle the execution of side effects in your application.
 * 
 * @type {object} sagaMiddleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Static reducers object for combining reducers.
 * Includes reducers for registration, login, and authentication.
 * 
 * @type {Object}
 */
const staticReducers = {
  register: registerReducer,   // Reducer for managing registration-related state
  login: loginReducer,         // Reducer for managing login-related state
  auth: authSaga               // Reducer for managing authentication-related state
};

/**
 * Configures the Redux store with the specified reducers and middleware.
 * The store uses `redux-saga` middleware to handle side effects and `redux-logger` to log actions.
 * 
 * @type {object} store
 */
const store = configureStore({
  reducer: staticReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(sagaMiddleware),
});

/**
 * Run the `watchValidateTokenSaga` to listen for token validation actions.
 * This saga listens for the `VALIDATE_TOKEN` action and triggers the `validateTokenSaga`.
 */
sagaMiddleware.run(watchValidateTokenSaga);

export default store;
