/**
 * @module tokenSaga
 * @description Redux-Saga for validating the authentication token from the cookies, and managing loading spinner state.
 * 
 * This module includes a Redux-Saga for validating a token, setting the spinner visibility while the validation is in progress, 
 * and updating the Redux state accordingly. It provides action creators and the reducer to handle token validation and spinner state.
 */

import { takeLatest, put, call } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import submitFormData from '../apis/submitFormData';
import * as route from '../utils/Routes';
import { METHOD } from '../apis/apiCall';

// Action Types
const VALIDATE_TOKEN = 'validate/token';               // Action type to initiate token validation
const VALIDATE_TOKEN_SUCCESS = 'validate/tokenSuccess'; // Action type when token validation is successful
const VALIDATE_TOKEN_FAILURE = 'validate/tokenFailure'; // Action type when token validation fails
const SET_SHOW_SPINNER = 'validate/showSpinner';       // Action type to set the spinner visibility

// Action Creators

/**
 * Action creator to initiate token validation.
 * Dispatches the `VALIDATE_TOKEN` action to trigger the validation saga.
 * 
 * @returns {Object} - Action to validate the token.
 */
export const validateToken = () => ({ type: VALIDATE_TOKEN });

/**
 * Action creator to set the spinner visibility state.
 * Dispatches the `SET_SHOW_SPINNER` action to control spinner visibility.
 * 
 * @param {boolean} value - Whether to show or hide the spinner.
 * @returns {Object} - Action to set the spinner state.
 */
export const setShowSpinner = (value) => ({ type: SET_SHOW_SPINNER, payload: value });

/**
 * Saga to validate the token by calling an API with the current token from the cookies.
 * It also manages the spinner state (showing it during validation and hiding it after).
 * 
 * @generator
 * @yields {put} - Dispatches actions based on token validation result and spinner state.
 * @yields {call} - Calls the `submitFormData` function to send the token to the backend.
 */
function* validateTokenSaga() {
  try {
    // Show spinner while validating the token
    yield put(setShowSpinner(true));

    // Get the token from cookies
    const token = Cookies.get('accessToken');

    if (token) {
      // Call the backend to validate the token
      const response = yield call(submitFormData, METHOD.POST, route.route.validateToken, { token });
      // Dispatch success action if token validation is successful
      yield put({ type: VALIDATE_TOKEN_SUCCESS, payload: response });
    } else {
      // If token is missing, throw an error
      throw new Error('Token not found');
    }
  } catch (error) {
    // Dispatch failure action if token validation fails
    yield put({ type: VALIDATE_TOKEN_FAILURE, error: error.message });
  } finally {
    // Hide spinner after the validation process is complete
    yield put(setShowSpinner(false));
  }
}

/**
 * Watcher saga to listen for the `VALIDATE_TOKEN` action and trigger the `validateTokenSaga`.
 * 
 * @generator
 * @yields {takeLatest} - Watches for the `VALIDATE_TOKEN` action and calls the `validateTokenSaga`.
 */
export function* watchValidateTokenSaga() {
  yield takeLatest(VALIDATE_TOKEN, validateTokenSaga);
}

// Reducer

/**
 * Initial state of the token validation reducer.
 * 
 * @type {Object}
 */
const initialState = {
  isTokenValid: false,     // Indicates if the token is valid
  validationError: null,   // Holds validation error message, if any
  showSpinner: false       // Controls the visibility of the spinner
};

/**
 * Reducer function for managing token validation state and spinner visibility.
 * 
 * @param {Object} state - The current state of the token reducer.
 * @param {Object} action - The action object that contains the type and payload.
 * @returns {Object} - The new state after the action has been processed.
 */
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_TOKEN_SUCCESS:
      return { ...state, isTokenValid: true, validationError: null, response: action.payload };

    case VALIDATE_TOKEN_FAILURE:
      return { ...state, isTokenValid: false, validationError: action.error };

    case SET_SHOW_SPINNER:  // Handle spinner visibility
      return { ...state, showSpinner: action.payload };

    default:
      return state;
  }
};

export default tokenReducer;
