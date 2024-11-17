import React, { useEffect, useState } from "react";
import Button from "../../../components/button";
import ShiftForm from "./components/ShiftForm";
import AddEmployeeToShift from "./components/AddEmployeeToShift";
import EmployeesList from "./components/employeesList";
import { useNavigate, useParams } from "react-router-dom";
import ShiftsAPI from "../../../API/ShiftsAPI";
import EmployeesShiftsAPI from "../../../API/EmployeesShiftsAPI";
import EmployeesAPI from "../../../API/EmployeesAPI";

const EditShiftPage = () => {
  const navigate = useNavigate();
  const { id: shiftID } = useParams();
  const [shiftDetails, setShiftDetails] = useState({});
  const [existEmployees, setExistEmployees] = useState([]);
  const [addedEmployees, setAddedEmployees] = useState([]);

  useEffect(() => {
    const fetchShift = async () => {
      try {
        const data = await ShiftsAPI.getShiftById(shiftID);
        setShiftDetails(data);
      } catch (error) {
        console.error("Error fetching shift data:", error);
      }
    };
    fetchShift();
  }, [shiftID]);

  useEffect(() => {
    const fetchEmployeesShift = async () => {
      try {
        const data = await EmployeesShiftsAPI.getEmployeesShiftByShiftId(
          shiftID
        );

        const employeesShiftPromises = data.map(async (employeeShift) => {
          const employee = await EmployeesAPI.getEmployeeById(
            employeeShift.employeeID
          );
          return employee;
        });

        // Use Promise.all to resolve all promises and get the final list of employees
        const employeesShift = await Promise.all(employeesShiftPromises);

        setExistEmployees(employeesShift);
      } catch (error) {
        console.error("Error fetching employees data:", error);
      }
    };

    fetchEmployeesShift();
  }, [shiftID]);

  const handleAddEmployee = (newEmployee) => {
    if (newEmployee) {
      const employeeIsExisting = existEmployees.find(
        (employee) => employee._id === newEmployee._id
      );
      if (!employeeIsExisting) {
        setExistEmployees([...existEmployees, newEmployee]);
        setAddedEmployees([...addedEmployees, newEmployee]);
      }
    }
  };

  const handleSetShiftDetails = (name, value) => {
    setShiftDetails({ ...shiftDetails, [name]: value });
  };

  const handleSave = () => {
    try {
      ShiftsAPI.updateShiftDetails(shiftDetails._id, shiftDetails);
      const employeeIds = addedEmployees.map((employee) => employee._id);
      EmployeesShiftsAPI.addEmployeesToShift(employeeIds, shiftID);

      alert("Shift updated successfully!");
      navigate("/shifts");
    } catch (error) {
      console.error("Failed to update shift:", error);
      alert("Error updating department.");
    }
  };
  const handleCancle = () => {
    navigate("/shifts");
  };

  return (
    <div className="w-full h-screen p-4 space-y-10">
      <h1 className="text-lg lg:text-3xl ml-10 lg:ml-0">Edit Shift</h1>
      <div className="flex flex-row md:justify-center space-y-4 md:space-y-0 w-full lg:justify-center">
        <div className="flex justify-center sm:p-6 md:p-8  lg:w-1/2">
          <ShiftForm
            shift={shiftDetails}
            handleSetShiftDetails={handleSetShiftDetails}
          />
        </div>
        <div className="flex flex-col items-center sm:p-6 md:p-8 lg:p-10 lg:w-1/2">
          <EmployeesList employees={existEmployees} />
          <div className="mt-32 ">
            <AddEmployeeToShift handleAddEmployee={handleAddEmployee} />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-8 mt-44">
        <Button label="Save" onClickFunction={handleSave} />
        <Button
          label="Cancel"
          color={"bg-cancel"}
          onClickFunction={handleCancle}
        />
      </div>
    </div>
  );
};

export default EditShiftPage;
