import api from "../API/api"; // Assuming you have a configured axios instance
import store from "../reducers/store"; // Import Redux store

const EMPLOYEES_SHIFTS_URL = "/employeesShifts";

// Get all employees shifts data
const getEmployeesShiftsData = async () => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(EMPLOYEES_SHIFTS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching employees shifts data:", error);
    return [];
  }
};

// Get employees shifts by shift ID
const getEmployeesShiftByShiftId = async (shiftId) => {
  try {
    const token = store.getState().user.token;
    const { data } = await api.get(`${EMPLOYEES_SHIFTS_URL}/byShiftId`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { shiftId }, // Pass shiftId as a query parameter
    });
    return data;
  } catch (error) {
    console.error("Error fetching employees shifts by shift ID:", error);
    return [];
  }
};

// Delete employee from shifts
const deleteEmployeeFromShifts = async (employeeID, shiftIds) => {
  try {
    const token = store.getState().user.token;

    // Fetch all employee shifts
    const { data: allEmployeesShifts } = await api.get(EMPLOYEES_SHIFTS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const employeeShifts = allEmployeesShifts.filter(
      (employeeShift) => employeeShift.employeeID === employeeID
    );

    const employeeShiftsToDelete = shiftIds.map((shiftId) => {
      return employeeShifts.find((employeeShift) => employeeShift.shiftID === shiftId);
    });

    await Promise.all(
      employeeShiftsToDelete.map(async (employeeShift) => {
        const url = `${EMPLOYEES_SHIFTS_URL}/${employeeShift._id}`;
        await api.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
    );
  } catch (error) {
    console.error("Error deleting employee shifts:", error);
  }
};

// Add employee to shifts
const addEmployeeToShifts = async (employeeID, shiftIds) => {
  try {
    const token = store.getState().user.token;

    await Promise.all(
      shiftIds.map(async (shiftID) => {
        const url = EMPLOYEES_SHIFTS_URL;
        await api.post(
          url,
          { employeeID, shiftID },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
    );
  } catch (error) {
    console.error("Error adding employee to shifts:", error);
  }
};

// Add multiple employees to a shift
const addEmployeesToShift = async (employeeIds, shiftID) => {
  try {
    const token = store.getState().user.token;

    await Promise.all(
      employeeIds.map(async (employeeID) => {
        const url = EMPLOYEES_SHIFTS_URL;
        await api.post(
          url,
          { employeeID, shiftID },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
    );
  } catch (error) {
    console.error("Error adding employees to shift:", error);
  }
};

export default {
  getEmployeesShiftsData,
  getEmployeesShiftByShiftId,
  deleteEmployeeFromShifts,
  addEmployeesToShift,
  addEmployeeToShifts,
};
