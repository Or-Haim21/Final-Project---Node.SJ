import React, { useEffect, useState } from 'react';
import Button from '../../../../components/button';
import EmployeestAPI from '../../../../API/EmployeesAPI';

const AddEmployeeToDepartment = ({handleAddEmployee}) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);





    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const data = await EmployeestAPI.getEmployeesData();
          const employeesDetails = data.map(employee => employee.details)
          setEmployees(employeesDetails);               
        } catch (error) {
          console.error("Error fetching employees data:", error);
        }
      };
      fetchEmployees();
    }, []);

    const handleChange = (event) => {
        const selectedId = event.target.value;
        const employee = employees.find((employee) => employee._id === selectedId);
        setSelectedEmployee(employee);
      };

      const AddEmployee = () => {
        if (selectedEmployee) {
          const employee = employees.find((employee) => employee._id === selectedEmployee._id);
          handleAddEmployee(employee)
        }
      };

  return (
    <div className="flex justify-center items-center space-x-4 w-full">
      <select
        id="employees"  
        name="employees"
        value={selectedEmployee ? selectedEmployee.id : ""}
        onChange={handleChange}
        className="w-1/3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Select a employee
        </option>
        {employees.map((employee) => (
          <option key={employee._id} value={employee._id}>
            {`${employee.firstName} ${employee.lastName}`}
          </option>
        ))}
      </select>
      <Button label="Add Employee" onClickFunction={AddEmployee} />
    </div>
  )
}

export default AddEmployeeToDepartment