const employeesRepo = require("../repositories/employeesRepo");
const departmentsServices = require("../services/departmentsServices");
const employeesShiftsServices = require("../services/employeesShiftsServices");
const shiftsServices = require("../services/shiftsServices");



const getAllEmployees = () => {
  return employeesRepo.getEmployees();
};

//Get the full data (employee details, department and shifts) of the employees.
const getFullDataOfEmployees = async () => {
  const employees = await employeesRepo.getEmployees();
  const employeesShifts = await employeesShiftsServices.getAllEmployeesShifts({});
  const shifts = await shiftsServices.getAllShifts();

  const fullDataOfEmployees = await Promise.all(employees.map(async (employee) => {
    const department = await departmentsServices.getDepartmentById(employee.departmentID);
    let employeeShifts = employeesShifts
      .filter(employeeShift => employeeShift.employeeID == employee._id)
      .map(shift => shifts.find(s => s._id == shift.shiftID));

    return {
      details: employee,
      department,
      shifts: employeeShifts,
    };
  }));

  return fullDataOfEmployees;
};



const getEmployeeById = (id) => {
  return employeesRepo.getEmployById(id);
};

const addEmployee = (employee) => {
  return employeesRepo.addEmployee(employee);
};

const updateEmployee = (id, employee) => {
  return employeesRepo.updateEmployee(id, employee);
};

const deleteEmployee = (id) => {
  return employeesRepo.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getFullDataOfEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
