// actions/authActions.js
export const CHECK_TOKEN = "CHECK_TOKEN";
export const TOKEN_VALIDATED = "TOKEN_VALIDATED";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const TOKEN_REFRESHED = "TOKEN_REFRESHED";

export const checkToken = (token) => ({
  type: CHECK_TOKEN,
  payload: token,
});

export const tokenValidated = (userData) => ({
  type: TOKEN_VALIDATED,
  payload: userData,
});

export const tokenExpired = () => ({
  type: TOKEN_EXPIRED,
});

export const refreshToken = (refreshToken) => ({
  type: REFRESH_TOKEN,
  payload: refreshToken,
});

export const tokenRefreshed = (newToken) => ({
  type: TOKEN_REFRESHED,
  payload: newToken,
});
