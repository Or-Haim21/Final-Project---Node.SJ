const Employee = require("../models/employee");

const getEmployees = () => {
  return Employee.find();
};

const getEmployById = (id) => {
  return Employee.findById(id);
};

const addEmployee = (employee) => {
  const newEmployee = new Employee(employee);
  return newEmployee.save();
};

const updateEmployee = (id, employee) => {
  return Employee.findByIdAndUpdate(id, employee);
};

const deleteEmployee = (id) => {
  return Employee.findByIdAndDelete(id);
};

module.exports = {
  getEmployees,
  getEmployById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
