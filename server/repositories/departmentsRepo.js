const Department = require("../models/department");

const getDepartments = () => {
    //can get departments by specific filter
  return Department.find();
};

const getDepartmentById = (id) => {
  return Department.findById(id);
};

const addDepartment = (department) => {
  const newDepartment = new Department(department);
  return newDepartment.save();
};

const updateDepartment = (id, department) => {
  return Department.findByIdAndUpdate(id, department);
};

const deleteDepartment = (id) => {
  return Department.findByIdAndDelete(id);
};

module.exports = {
  getDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
