import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import DepartmentForm from "./components/departmentForm";
import DepartmentAPI from "../../../API/DepartmentsAPI";

const AddDepartmentPage = () => {
  const navigate = useNavigate();
  const [departmentData, setDepartmentData] = useState({
    name: "",
    managerID: "",
  });



  const handleSetDepartmentDetails = (name, value) => {
    setDepartmentData({ ...departmentData, [name]: value });
  };
  const handleAdd = () => {
    if (departmentData.name !== "" && departmentData.managerID !== "") {
      DepartmentAPI.addNewDepartment(departmentData);
      alert("The department was added successfully");
      navigate("/departments");
      return;
    }
    alert("Please enter all department details!")
  };

  const handleCancel = () => {
    navigate("/departments");
  };

  return (
    <div className="w-full h-screen p-4 space-y-10">
      <h1 className="text-lg lg:text-3xl ml-10 lg:ml-0">Add Department</h1>
      <div className="flex flex-col items-center w-full h-1/2">
        <div className="flex flex-col md:justify-center items-center space-y-4 md:space-y-0 w-1/2 mt-10">
          <DepartmentForm
            department={departmentData}
            handleSetDepartmentDetails={handleSetDepartmentDetails}
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

export default AddDepartmentPage;
