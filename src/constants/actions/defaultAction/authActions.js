/**
 * Reducer to manage authentication state including token and user data.
 * It handles actions for token validation, expiration, and refresh.
 * 
 * @module authReducer
 */

import { TOKEN_VALIDATED, TOKEN_EXPIRED, TOKEN_REFRESHED } from "./token";

/**
 * Initial state of the authentication.
 * @type {Object}
 * @property {string|null} token - The current authentication token.
 * @property {string|null} refreshToken - The refresh token used for token renewal.
 * @property {Object|null} userData - Data of the authenticated user.
 * @property {boolean} isAuthenticated - Flag to check if the user is authenticated.
 */
const initialState = {
  token: null,
  refreshToken: null,
  userData: null,
  isAuthenticated: false,
};

/**
 * Authentication reducer function.
 * Handles state changes based on authentication-related actions.
 * 
 * @param {Object} state - The current state of authentication.
 * @param {Object} action - The dispatched action object.
 * @param {string} action.type - The type of the action (e.g., TOKEN_VALIDATED, TOKEN_EXPIRED).
 * @param {Object} action.payload - The payload of the action, which contains relevant data.
 * 
 * @returns {Object} The updated authentication state.
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Handles the TOKEN_VALIDATED action.
     * When the token is validated, store user data and token in the state.
     * 
     * @returns {Object} Updated state with authenticated user data and token.
     */
    case TOKEN_VALIDATED:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
      };

    /**
     * Handles the TOKEN_EXPIRED action.
     * When the token expires, reset the authentication state to initial state.
     * 
     * @returns {Object} Updated state with no token, refreshToken, or user data.
     */
    case TOKEN_EXPIRED:
      return {
        ...state,
        token: null,
        refreshToken: null,
        userData: null,
        isAuthenticated: false,
      };

    /**
     * Handles the TOKEN_REFRESHED action.
     * Updates the state with the new authentication token.
     * 
     * @returns {Object} Updated state with refreshed token.
     */
    case TOKEN_REFRESHED:
      return {
        ...state,
        token: action.payload,
      };

    /**
     * Default case returns the current state.
     */
    default:
      return state;
  }
};

export default authReducer;
