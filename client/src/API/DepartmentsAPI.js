import api from "../API/api"; 
import store from "../reducers/store"; // Import Redux store

const DEPARTMENTS_URL = "/departments";

// Get all departments
const getDepartmentsData = async () => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(DEPARTMENTS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching departments data:", error);
    return [];
  }
};

// Update department details
const updateDepartmentDetails = async (id, updatedDepartmentsData) => {
  try {
    const token = store.getState().user.token;
    const result = await api.put(`${DEPARTMENTS_URL}/${id}`, updatedDepartmentsData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error updating department data:", error);
    return;
  }
};

// Add a new department
const addNewDepartment = async (department) => {
  try {
    const token = store.getState().user.token;
    const result = await api.post(DEPARTMENTS_URL, department, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error adding department:", error);
  }
};

export default {
  getDepartmentsData,
  updateDepartmentDetails,
  addNewDepartment,
};
