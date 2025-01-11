/**
 * @module axiosInstance
 * @description Axios instance setup for API requests with automatic inclusion of the authorization token from cookies.
 * 
 * This module creates a pre-configured instance of axios with a request interceptor that adds the Authorization header 
 * to every outgoing HTTP request if a valid token is present in the cookies.
 */

import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance with a base URL for the API
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",  // API base URL for making HTTP requests
});

/**
 * Request Interceptor
 * 
 * This interceptor is added to the Axios instance to include the `Authorization` header in every request if a valid token 
 * is found in the cookies. The token will be sent in the format: `Bearer <token>`.
 * 
 * @param {Object} config - The Axios request configuration object.
 * @returns {Object} - The modified Axios request configuration with the Authorization header.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the 'accessToken' from cookies
    const token = Cookies.get("accessToken");

    // If token exists, add it to the Authorization header
    if (token || token != null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    
    // Log the token for debugging purposes (optional)
    console.log("Token from Cookies: ", token);

    // Return the updated configuration object to proceed with the request
    return config;
  },
);

// Export the configured Axios instance for use in API requests across the application
export default axiosInstance;
