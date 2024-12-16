// utils/tokenUtils.js
import jwt_decode from "jwt-decode";

export const isTokenExpired = (token) => {
  try {
    const decoded = jwt_decode(token);
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp < now;
  } catch (error) {
    return true; // Treat invalid token as expired
  }
};

export const willTokenExpireSoon = (token, bufferTime = 300) => {
  try {
    const decoded = jwt_decode(token);
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp - now < bufferTime; // Check if within buffer time
  } catch (error) {
    return true; // Treat invalid token as expiring soon
  }
};
