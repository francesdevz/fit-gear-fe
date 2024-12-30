// actions/authActions.js

/**
 * Action type constants for authentication actions.
 * @constant
 * @type {string}
 */
export const CHECK_TOKEN = "CHECK_TOKEN";
export const TOKEN_VALIDATED = "TOKEN_VALIDATED";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const TOKEN_REFRESHED = "TOKEN_REFRESHED";
export const SET_TOKEN = "SET_TOKEN";

/**
 * Action creator to check the validity of a token.
 * 
 * @param {string} token - The token to be checked.
 * @returns {Object} The action object with type `CHECK_TOKEN` and the token payload.
 */
export const checkToken = (token) => ({
  type: CHECK_TOKEN,
  payload: token,
});

/**
 * Action creator to handle token validation.
 * When the token is validated successfully, this action is dispatched.
 * 
 * @param {Object} userData - The user data returned after token validation.
 * @returns {Object} The action object with type `TOKEN_VALIDATED` and the user data payload.
 */
export const tokenValidated = (userData) => ({
  type: TOKEN_VALIDATED,
  payload: userData,
});

/**
 * Action creator to handle token expiration.
 * When the token expires, this action is dispatched.
 * 
 * @returns {Object} The action object with type `TOKEN_EXPIRED`.
 */
export const tokenExpired = () => ({
  type: TOKEN_EXPIRED,
});

/**
 * Action creator to request a token refresh.
 * 
 * @param {string} refreshToken - The refresh token used to obtain a new access token.
 * @returns {Object} The action object with type `REFRESH_TOKEN` and the refresh token payload.
 */
export const refreshToken = (refreshToken) => ({
  type: REFRESH_TOKEN,
  payload: refreshToken,
});

/**
 * Action creator to handle a refreshed token.
 * When a new token is received after a refresh request, this action is dispatched.
 * 
 * @param {string} newToken - The new access token after refreshing.
 * @returns {Object} The action object with type `TOKEN_REFRESHED` and the new token payload.
 */
export const tokenRefreshed = (newToken) => ({
  type: TOKEN_REFRESHED,
  payload: newToken,
});

/**
 * Action creator to set the token directly in the state.
 * 
 * @param {string} token - The token to be set.
 * @returns {Object} The action object with type `SET_TOKEN` and the token payload.
 */
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
