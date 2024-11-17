import React, { useEffect, useState } from "react";
import DepartmentsAPI from '../../../../API/DepartmentsAPI';

const EmployeesFilters = ({ employees, setFilteredEmployees }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await DepartmentsAPI.getDepartmentsData();
        const departmentsData = data.map(department=> department.details) 
        setDepartments(departmentsData);               
      } catch (error) {
        console.error("Error fetching departments data:", error);
      }
    };
    fetchDepartments();
  }, []);

  const handleChangeDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleSearchName = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    var filteredEmployees = employees;

    if (searchQuery !== "") {
      filteredEmployees = filteredEmployees.filter((employee) => {
        const fullName = `${employee.details.firstName} ${employee.details.lastName}`;
        return fullName.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    if (selectedDepartment !== "All") {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.department._id === selectedDepartment
      );
    }

    setFilteredEmployees(filteredEmployees);
  }, [selectedDepartment, searchQuery, employees]);

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        id="searchNameQuery"
        name="searchNameQuery"
        placeholder="Enter name for search"
        value={searchQuery}
        className="w-44 border border-gray-300 rounded-md py-2 px-2 text-sm focus:outline-none focus:border-primary"
        autoComplete="off"
        onChange={handleSearchName}
      />
      <div className="flex items-center space-x-4">
        <select
          value={selectedDepartment}
          onChange={handleChangeDepartment}
          id="departments"
          className="border border-primary text-primary bg-transparent text-sm rounded-lg focus:border-primary block w-36 p-2.5"
        >
          <option key="All" value={"All"}>
            All Departments
          </option>
          {departments?.map((department) => (
            <option key={department._id} value={department._id}>
              {department.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EmployeesFilters;
