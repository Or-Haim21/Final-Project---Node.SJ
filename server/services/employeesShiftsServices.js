const employeesShiftsRepo = require("../repositories/employeesShiftsRepo");

const getAllEmployeesShifts = () => {
  return employeesShiftsRepo.getEmployeesShifts();
};

const getEmployeeShiftById = (id) => {
  return employeesShiftsRepo.getEmployeeShiftById(id);
};

const getEmployeesShiftByShiftId = async (shiftId) => {
  const employeesShifts = await employeesShiftsRepo.getEmployeesShifts();
  const employeesShift = employeesShifts.filter(employeeShift => employeeShift.shiftID === shiftId);
  return employeesShift;
}


const addEmployeeShift = (employeeShift) => {
  return employeesShiftsRepo.addEmployeeShift(employeeShift);
};

const deleteEmployeeShift = (id) => {
  return employeesShiftsRepo.deleteEmployeeShift(id);
};

module.exports = {
  getAllEmployeesShifts,
  getEmployeeShiftById,
  getEmployeesShiftByShiftId,
  addEmployeeShift,
  deleteEmployeeShift
};
