import axios from "axios";
import store from "../reducers/store"; // Adjust based on your Redux setup
import { useNavigate } from "react-router-dom";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // If the response is successful, return it as-is
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // If the token is expired or invalid
      console.error("Token expired. Redirecting to login...");

      // Clear user data in Redux or any state management
      store.dispatch({ type: "LOGOUT" }); // Ensure your reducer handles this action

      // Redirect to login page
      window.location.href = "/auth"; // Adjust the route based on your setup
    }

    // Reject the promise for other errors
    return Promise.reject(error);
  }
);

export default api;
