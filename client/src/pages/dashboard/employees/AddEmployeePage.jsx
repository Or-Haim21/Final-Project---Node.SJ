import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import Button from "../../../components/button";
import EmployeesAPI from "../../../API/EmployeesAPI";

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    startWorkYear: "",
    departmentID: "",
  });

  const handleSetEmployeeDetails = (name, value) => {
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleAdd = () => {
    if (
      employeeDetails.firstName !== "" &&
      employeeDetails.lastName !== "" &&
      employeeDetails.startWorkYear !== "" &&
      employeeDetails.departmentID !== ""
    ) {
      EmployeesAPI.addNewEmployee(employeeDetails);
      alert("The employee was added successfully");
      navigate("/employees");
      return;
    }
    alert("Please enter all employee details!");
  };

  const handleCancel = () => {
    navigate("/employees");
  };

  return (
    <div className="w-full h-screen p-4 space-y-10">
      <h1 className="text-lg lg:text-3xl ml-10 lg:ml-0">Add Employee</h1>
      <div className="flex flex-col items-center w-full h-1/2">
        <div className="flex flex-col md:justify-center items-center space-y-4 md:space-y-0 w-1/2 mt-10">
          <EmployeeForm
            employee={employeeDetails}
            handleSetEmployeeDetails={handleSetEmployeeDetails}
          />
        </div>
        <div className="flex justify-center items-center space-x-10 mt-20">
          <Button label="Add" onClickFunction={handleAdd} />
          <Button
            label="Cancel"
            color="bg-cancel"
            onClickFunction={handleCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployeePage;
