import api from "../API/api"; // Centralized axios instance
import store from "../reducers/store"; // Redux store for token management

const USERS_URL = "users";

// Get all users data
const getUsersData = async () => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(USERS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
};

// Update user currently allowed actions
const updateUserCurrentlyAllowedActions = async (id, updatedUserData) => {
  try {
    const token = store.getState().user.token;
    const result = await api.put(`${USERS_URL}/${id}`, updatedUserData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};

export default {
  getUsersData,
  updateUserCurrentlyAllowedActions,
};
