import { ApiCall, METHOD } from '../apis/apiCall';

/**
 * A function to submit form data to the specified API endpoint.
 * It makes a request using the provided HTTP method, API URL, and data, 
 * and returns the response data if successful.
 * 
 * @param {string} method - The HTTP method to use for the request. One of 'POST', 'GET', 'PUT', 'DELETE'.
 * @param {string} routeUrl - The URL of the API endpoint to send the request to.
 * @param {Object} data - The data to send with the request, such as form data or body content.
 * @returns {Promise<Object>} A promise that resolves with the response data from the API.
 * @throws {Error} Throws an error if the API call fails or if an invalid HTTP method is provided.
 */
const submitFormData = async (method, routeUrl, data) => {
  try {
    const response = await ApiCall(method, routeUrl, data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};

export default submitFormData;
