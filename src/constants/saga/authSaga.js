
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CHECK_TOKEN, TOKEN_VALIDATED, TOKEN_EXPIRED } from "../actions/defaultAction/token";

const validateApiCall = (token) => axios.post("", { token });

function* checkTokenSaga(action) {
  try {
    const response = yield call(validateApiCall, action.payload);
    const { isValid, userData } = response.data;

    if (isValid) {
      yield put({
        type: TOKEN_VALIDATED,
        payload: { token: action.payload, userData },
      });
    } else {
      yield put({ type: TOKEN_EXPIRED });
    }
  } catch (error) {
    console.error("Error validating token:", error);
    yield put({ type: TOKEN_EXPIRED });
  }
}

// Root saga
export default function* authSaga() {
  yield takeLatest(CHECK_TOKEN, checkTokenSaga);
}
