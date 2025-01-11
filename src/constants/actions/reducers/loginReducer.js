/**
 * @module LoginReducer
 * @description Redux slice for handling login-related state and actions.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as payload from "../../utils/payload";
import Cookies from "js-cookie";
import submitFormData from '../../apis/submitFormData';
import * as route from '../../utils/Routes';
import { METHOD } from '../../apis/apiCall';

export const LoginUser = createAsyncThunk("login/user", async (payload, { rejectWithValue }) => {
  try {
    const response = await submitFormData(METHOD.POST, route.route.login, payload);
    if (response) {
      const { accessToken, refreshToken, tokenType, expiresIn } = response;

      // Store the token in cookies
      Cookies.set('accessToken', accessToken, { secure: true, sameSite: 'Strict' });

      // Return the token and response data to be handled in the reducer
      return { accessToken, refreshToken, tokenType, expiresIn };
    }
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

/**
 * LoginReducer Slice
 * 
 * A Redux slice for managing the login form state, including fields such as email and password.
 * It defines reducers to update individual fields and handles additional logic via `extraReducers`.
 */
const LoginReducer = createSlice({
  /**
   * Name of the slice.
   * @type {string}
   */
  name: "Login",

  /**
   * Initial state for the login slice.
   * This state is imported from the payload module for consistency.
   * 
   * @type {Object}
   */
  initialState: {...payload.loginPayload, accessToken: null},

  /**
   * Reducers for handling synchronous state changes.
   */
  reducers: {
    /**
     * Set a specific field in the login form state.
     * Updates the value of a field (e.g., email, password) in the Redux state.
     * 
     * @param {Object} state - The current state of the login slice.
     * @param {Object} action - The action object containing the payload.
     * @param {string} action.payload.field - The name of the field to update.
     * @param {any} action.payload.value - The new value for the field.
     */
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      console.log(field, state[field], value); // Debugging: Log the updated field and value
    },
  },

  /**
   * Extra reducers for handling asynchronous actions or logic tied to other slices.
   * Currently, this is empty but can be extended as needed.
   */
  extraReducers: (builder) => {
    // Add cases for async actions if required in the future
    builder.addCase(LoginUser.pending, (state) => {
      state.showSpinner = true
    })
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.showSpinner = false
      state.emailAddress = "",
      state.accessToken = action?.payload?.accessToken
      state.password = ""
    })
    builder.addCase(LoginUser.rejected, (state) => {
      state.showSpinner = false
    })
  },
});

/**
 * Exported actions from the LoginReducer slice.
 * These actions can be dispatched to update the Redux state.
 * 
 * @type {Object}
 */
export const { setField } = LoginReducer.actions;

/**
 * Default export of the reducer function for integration into the Redux store.
 * 
 * @type {Function}
 */
export default LoginReducer.reducer;
