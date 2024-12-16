import { TOKEN_VALIDATED, TOKEN_EXPIRED, TOKEN_REFRESHED } from "./token";

const initialState = {
  token: null,
  refreshToken: null,
  userData: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_VALIDATED:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case TOKEN_EXPIRED:
      return {
        ...state,
        token: null,
        refreshToken: null,
        userData: null,
        isAuthenticated: false,
      };

    case TOKEN_REFRESHED:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
