import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import authReducer from "../actions/defaultAction/authActions";
import socketReducer from "../socket/socketReducer";
import rootSaga from "../saga/rootSaga";
import registerReducer from '../actions/reducers/registerReducer'

const sagaMiddleware = createSagaMiddleware();

const staticReducers = {
  auth: authReducer,
  socket: socketReducer,
  register: registerReducer
};

const store = configureStore({
  reducer: staticReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
