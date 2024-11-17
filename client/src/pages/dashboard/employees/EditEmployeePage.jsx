import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import ShiftsTable from "./components/ShiftsTable";
import AddShiftToEmployee from "./components/AddShiftToEmployee";
import Button from "../../../components/button";
import EmployeesAPI from "../../../API/EmployeesAPI";
import EmployeesShiftsAPI from "../../../API/EmployeesShiftsAPI";
import PageHeader from "../../../components/PageHeader";

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const { id: employeeID } = useParams();

  const [employeeDetails, setEmployeeDetails] = useState({});
  const [employeeShifts, setEmployeeShifts] = useState([]);
  const [originalShifts, setOriginalShifts] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await EmployeesAPI.getEmployeesData();
        const employeeData = data.find(
          (employee) => employee.details._id === employeeID
        );
        if (employeeData) {
          setEmployeeDetails(employeeData.details);
          setEmployeeShifts(employeeData.shifts);
          setOriginalShifts(employeeData.shifts);
        }
      } catch (error) {
        console.error("Error fetching employees data:", error);
      }
    };
    fetchEmployee();
  }, [employeeID]);

  const handleAddShift = (newShift) => {
    if (newShift) {
      const shiftIsExisting = employeeShifts.find(
        (shift) => shift._id === newShift._id
      );
      if (!shiftIsExisting) {
        setEmployeeShifts([...employeeShifts, newShift]);
      }
    }
  };

  const handleDeleteShift = (shiftId) => {
    const updateShifts = employeeShifts.filter(
      (shift) => shift._id !== shiftId
    );
    setEmployeeShifts(updateShifts);
  };

  const handleSetEmployeeDetails = (name, value) => {
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleSave = async () => {
    try {
      EmployeesAPI.updateEmployeeDetails(employeeDetails._id, employeeDetails);
      const originalShiftIds = originalShifts.map((shift) => shift._id);
      const finalShiftIds = employeeShifts.map((shift) => shift._id);
      //Find the deleted shifts
      const shiftsToDelete = originalShiftIds.filter(
        (shiftId) => !finalShiftIds.includes(shiftId)
      );

      //Find the added shifts
      const shiftsToAdd = finalShiftIds.filter(
        (shiftId) => !originalShiftIds.includes(shiftId)
      );

      await EmployeesShiftsAPI.addEmployeeToShifts(
        employeeDetails._id,
        shiftsToAdd
      );
      await EmployeesShiftsAPI.deleteEmployeeFromShifts(
        employeeDetails._id,
        shiftsToDelete
      );

      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
      console.error("Failed to update employee:", error);
      alert("Error updating employee.");
    }
  };

  const handleCancle = () => {
    navigate("/employees");
  };

  return (
    <div className="w-full h-screen space-y-10 ">
      <PageHeader title="Edit Employee" />
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
          <EmployeeForm
            employee={employeeDetails}
            handleSetEmployeeDetails={handleSetEmployeeDetails}
          />
          <div className="sm:p-6 md:p-8 lg:p-10 lg:w-1/2">
            <ShiftsTable
              shifts={employeeShifts}
              handleDeleteShift={handleDeleteShift}
            />
            <div className="mt-28 ">
              <AddShiftToEmployee handleAddShift={handleAddShift} />
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

export default EditEmployeePage;
