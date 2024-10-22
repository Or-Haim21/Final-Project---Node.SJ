const employeesRepo = require("../repositories/employeesRepo");
const departmentsRepo = require("../repositories/departmentsRepo");
const employeesShiftsRepo = require("../repositories/employeesShiftsRepo");
const shiftsRepo = require("../repositories/shiftsRepo");



const getAllEmployees = () => {
  return employeesRepo.getEmployees();
};

//Get the full data (employee details, department and shifts) of the employees.
const getFullDataOfEmployees = async () => {
    const employees = await employeesRepo.getEmployees();
    const departments = await departmentsRepo.getDepartments();
    const shifts = await shiftsRepo.getShifts({});
    const employeesShifts = await employeesShiftsRepo.getEmployeesShifts();

    const fullDataOfEmployees = employees.map((employee) => {
      const department = departments.find((dept) => dept._id.equals(employee.departmentID));
      const employeeShifts = employeesShifts.filter(employeeShift => employee._id.equals(employeeShift.employeeID));
      const allShifts = employeeShifts.map((employeeShift) => {
        const shift = shifts.find((sh) => sh._id.equals(employeeShift.shiftID));
        return shift;
      });

      return {
        id: employee._id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        department: department ? department: {},
        shifts: allShifts
      };
    });

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
