import api from "../API/api"; // Assuming you have a configured axios instance
import store from "../reducers/store"; // Import Redux store

const SHIFTS_URL = "/shifts";

// Get all shifts data
const getShiftsData = async () => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(SHIFTS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching shifts data:", error);
    return [];
  }
};

// Get a specific shift by ID
const getShiftById = async (id) => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(`${SHIFTS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching shift data:", error);
    return [];
  }
};

// Add a new shift
const addNewShift = async (shift) => {
  try {
    const token = store.getState().user.token;
    const result = await api.post(SHIFTS_URL, shift, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error adding shift:", error);
  }
};

// Update shift details
const updateShiftDetails = async (id, updatedShiftData) => {
  try {
    const token = store.getState().user.token;
    const result = await api.put(`${SHIFTS_URL}/${id}`, updatedShiftData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error updating shift data:", error);
  }
};

export default {
  getShiftsData,
  getShiftById,
  addNewShift,
  updateShiftDetails,
};
