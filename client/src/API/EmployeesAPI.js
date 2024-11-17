import axios from "axios";
import store from "../reducers/store";
import api from "../API/api"; 

//const EMPLOYEES_URL = "http://localhost:3000/employees";
const EMPLOYEES_URL = "/employees"; // Base URL is already set in the Axios instance

const getEmployeesData = async () => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(EMPLOYEES_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching employees data:", error);
    return [];
  }
};


const getEmployeeById = async (employeeId) => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(`${EMPLOYEES_URL}/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return {};
  }
};

// Update employee details
const updateEmployeeDetails = async (id, updatedEmployeeData) => {
  try {
    const token = store.getState().user.token;
    const result = await api.put(`${EMPLOYEES_URL}/${id}`, updatedEmployeeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error updating employee data:", error);
    return;
  }
};

// Add new employee
const addNewEmployee = async (employee) => {
  try {
    const token = store.getState().user.token;
    const result = await api.post(EMPLOYEES_URL, employee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};

export default {
  getEmployeesData,
  getEmployeeById,
  updateEmployeeDetails,
  addNewEmployee,
};
