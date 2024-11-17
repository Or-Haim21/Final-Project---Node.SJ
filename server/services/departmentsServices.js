const departmentsRepo = require("../repositories/departmentsRepo");
const employeesRepo = require("../repositories/employeesRepo");

const getAllDepartments = (filters) => {
  return departmentsRepo.getDepartments(filters);
};

const getFullDataOfDepartments = async () => {
  const departments = await departmentsRepo.getDepartments();
  const fullDataOfDepartments = await Promise.all(
    // Promise.all ensure all asynchronous operations are completed before returning the result.
    departments.map(async (department) => {
      const manager = await employeesRepo.getEmployById(department.managerID);
      const allEmployees = await employeesRepo.getEmployees();
      const employees = allEmployees.filter((employee) =>
        department._id.equals(employee.departmentID)
      );

      return {
        details: department,
        manager: manager ? manager : {},
        employees: employees,
      };
    })
  );

  return fullDataOfDepartments;
};

const getDepartmentById = (id) => {
  return departmentsRepo.getDepartmentById(id);
};

const addDepartment = (department) => {
  return departmentsRepo.addDepartment(department);
};

const updateDepartment = (id, department) => {
  return departmentsRepo.updateDepartment(id, department);
};

const deleteDepartment = (id) => {
  return departmentsRepo.deleteDepartment(id);
};

module.exports = {
  getAllDepartments,
  getFullDataOfDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
