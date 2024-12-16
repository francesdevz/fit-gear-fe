import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import socketSaga from "./../socket/socketSaga";

export default function* rootSaga() {
  yield all([
    authSaga(), 
    socketSaga(),
  ]);
}
