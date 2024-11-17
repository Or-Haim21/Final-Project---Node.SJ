import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/AddNewButton";
import EmployeesFilters from "./components/EmployeesFilters";
import EmployeesTable from "./components/EmployeesTable";
import EmployeesAPI from "../../../API/EmployeesAPI";
import PageHeader from "../../../components/PageHeader";



const EmployeesPage = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleAddEmployee = () => {
    navigate("add-employee");
  };

    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const data = await EmployeesAPI.getEmployeesData();
          setEmployees(data);               
        } catch (error) {
          console.error("Error fetching employees data:", error);
        }
      };
      fetchEmployees();
    }, []);
    
  return (
    <div className="w-full p-4 space-y-10">
      <PageHeader title="Employees" />

      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <EmployeesFilters
          employees={employees}
          setFilteredEmployees={setFilteredEmployees}
        />
        <AddNewButton onClick={handleAddEmployee} />
      </div>

      <div className="flex justify-center items-center w-full">
        <EmployeesTable employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default EmployeesPage;
