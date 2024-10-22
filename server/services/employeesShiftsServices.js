const employeesShiftsRepo = require("../repositories/employeesShiftsRepo");

const getAllEmployeesShifts = () => {
  return employeesShiftsRepo.getEmployeesShifts();
};

const getEmployeeShiftById = (id) => {
  return employeesShiftsRepo.getEmployeeShiftById(id);
};

const addEmployeeShift = (employeeShift) => {
  return employeesShiftsRepo.addEmployeeShift(employeeShift);
};

const deleteEmployeeShift = (id) => {
  return employeesShiftsRepo.deleteEmployeeShift(id);
};

// const getEmployeeShiftsByEmployeeId = async (employeeId) => {
//   const employeeShifts = await employeesShiftsRepo.getEmployeeShifts();
//   const filterEmployeeShifts = employeeShifts.filter(
//     (employeeShift) => employeeShift.employeeID === employeeId
//   );
//   return filterEmployeeShifts;
// };

// const getEmployeeShiftsByShiftId = async (shiftId) => {
//   const employeeShifts = await employeesShiftsRepo.getEmployeeShifts();
//   const filterEmployeeShifts = employeeShifts.filter(
//     (employeeShift) => employeeShift.shiftID === shiftId
//   );
//   return filterEmployeeShifts;
// };

module.exports = {
  getAllEmployeesShifts,
  getEmployeeShiftById,
  addEmployeeShift,
  deleteEmployeeShift,
  // getEmployeeShiftsByEmployeeId,
  // getEmployeeShiftsByShiftId,
};
