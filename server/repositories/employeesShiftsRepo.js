const EmployeeShifts = require("../models/employeeShifts");

const getEmployeesShifts = () => {
  return EmployeeShifts.find();
};

const getEmployeeShiftById = (id) => {
  return EmployeeShifts.findById(id);
};

const addEmployeeShift = (emplyeeShift) => {
  const newEmployeeShift = new EmployeeShifts(emplyeeShift);
  return newEmployeeShift.save();
}

const deleteEmployeeShift = (id) => {
  return EmployeeShifts.findByIdAndDelete(id);
}

module.exports = {
  getEmployeesShifts,
  getEmployeeShiftById,
  addEmployeeShift,
  deleteEmployeeShift
};
