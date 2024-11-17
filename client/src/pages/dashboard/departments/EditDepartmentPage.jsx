import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import DepartmentForm from "./components/DepartmentForm";
import DepartmentEmployeesTable from "./components/DepartmentEmployeesTable";
import AddEmployeeToDepartment from "./components/AddEmployeeToDepartment";
import DepartmentsAPI from "../../../API/DepartmentsAPI";
import EmployeesAPI from "../../../API/EmployeesAPI";
import PageHeader from "../../../components/PageHeader";

const EditDepartmentPage = () => {
  const navigate = useNavigate();
  const { id: departmentID } = useParams();

  const [departmentDetails, setDepartmentDetails] = useState({});
  const [departmentEmployees, setDepartmentEmployees] = useState([]);
  const [addedEmployees, setaddedEmployees] = useState([]);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const data = await DepartmentsAPI.getDepartmentsData();
        const departmentData = data.find(
          (department) => department.details._id === departmentID
        );

        if (departmentData) {
          setDepartmentDetails(departmentData.details);
          setDepartmentEmployees(departmentData.employees);
        }
      } catch (error) {
        console.error("Error fetching department data:", error);
      }
    };

    fetchDepartment();
  }, [departmentID]);

  const handleAddEmployee = (newEmployee) => {
    if (newEmployee) {
      const employeeIsExisting = departmentEmployees.find(
        (employee) => employee._id === newEmployee._id
      );
      if (!employeeIsExisting) {
        setDepartmentEmployees([...departmentEmployees, newEmployee]);
        setaddedEmployees([...addedEmployees, newEmployee]);
      }
    }
  };

  const handleSetDepartmentDetails = (name, value) => {
    setDepartmentDetails({ ...departmentDetails, [name]: value });
  };

  const handleSave = async () => {
    try {
      DepartmentsAPI.updateDepartmentDetails(
        departmentDetails._id,
        departmentDetails
      );
      //Update the department for the manager selected 
      EmployeesAPI.updateEmployeeDetails(departmentDetails.managerID, {
        departmentID: departmentID,
      });

      //Update the department for all added employees 
      addedEmployees.map((employee) => {
        EmployeesAPI.updateEmployeeDetails(employee._id, {
          departmentID: departmentID,
        });
      });
      alert("Employee department updated successfully!");
      navigate("/departments");
    } catch (error) {
      console.error("Failed to update department:", error);
      alert("Error updating department.");
    }
  };
  const handleCancle = () => {
    navigate("/departments");
  };

  return (
    <div className="w-full h-screen space-y-10 ">
      <PageHeader title="Edit Department" />
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
          <DepartmentForm
            department={departmentDetails}
            handleSetDepartmentDetails={handleSetDepartmentDetails}
          />
          <div className="sm:p-6 md:p-8 lg:p-10 lg:w-1/2">
            <DepartmentEmployeesTable employees={departmentEmployees} />
            <div className="mt-28 ">
              <AddEmployeeToDepartment handleAddEmployee={handleAddEmployee} />
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-24 mt-32">
          <Button label="Save" onClickFunction={handleSave} />
          <Button
            label="Cancel"
            color={"bg-cancel"}
            onClickFunction={handleCancle}
          />
        </div>
      </div>
    </div>
  );
};

export default EditDepartmentPage;
