import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga";
import authReducer from "../actions/authActions"; 
import socketReducer from "../socket/socketReducer";

import rootSaga from "../saga/rootSaga"; 

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    socket: socketReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store