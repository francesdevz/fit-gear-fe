import axiosInstance from "./axiosInstance";

/**
 * HTTP methods supported by the API.
 * @enum {string}
 */
export const METHOD = {
    POST: "POST",
    GET: "GET",
    DELETE: "DELETE",
    PUT: "PUT"
};

/**
 * A generic function to make an HTTP request using Axios.
 * This function supports the common HTTP methods: POST, GET, PUT, and DELETE.
 * It automatically selects the correct Axios method based on the provided HTTP method type.
 * 
 * @param {string} method - The HTTP method to use for the request. One of 'POST', 'GET', 'PUT', 'DELETE'.
 * @param {string} url - The URL for the request.
 * @param {Object} payload - The data to be sent with the request. This can be the request body for POST/PUT or query parameters for GET.
 * @returns {Promise} A promise that resolves with the response of the Axios request.
 * @throws {Error} Throws an error if an unsupported HTTP method is provided.
 */
export const ApiCall = (method, url, payload) => {
    switch (method) {
      case METHOD.POST:
        return axiosInstance.post(url, payload);
      case METHOD.GET:
        return axiosInstance.get(url, { params: payload });
      case METHOD.PUT:
        return axiosInstance.put(url, payload);
      case METHOD.DELETE:
        return axiosInstance.delete(url, { data: payload });
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  };


