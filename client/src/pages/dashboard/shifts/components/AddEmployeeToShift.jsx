import React, { useState, useEffect } from 'react';
import Button from '../../../../components/button';
import EmployeesAPI from '../../../../API/EmployeesAPI';

const AddEmployeeToShift = ({ handleAddEmployee }) => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeesAPI.getEmployeesData();
        setEmployees(data);               
      } catch (error) {
        console.error("Error fetching shift data:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const employee = employees.find((emp) => emp.details._id === selectedId);
    setSelectedEmployee(employee);
  };

  const addEmployeeToShift = () => {
    if (selectedEmployee) {
      handleAddEmployee(selectedEmployee.details);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 w-full">
      <select
        id="employees"
        name="employees"
        value={selectedEmployee ? selectedEmployee._id : ""}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none focus:border-primary"
      >
        <option value="" disabled>
          Select
        </option>
        {employees.map((employee) => (
          <option key={employee.details._id} value={employee.details._id}>
            {`${employee.details.firstName} ${employee.details.lastName}`}
          </option>
        ))}
      </select>
      <Button label="Add" onClickFunction={addEmployeeToShift} />
    </div>
  );
};

export default AddEmployeeToShift;
