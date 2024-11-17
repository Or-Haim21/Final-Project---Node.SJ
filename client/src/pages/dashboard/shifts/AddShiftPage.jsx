import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import ShiftForm from "./components/ShiftForm";
import ShiftsAPI from '../../../API/ShiftsAPI';


const AddShiftPage = () => {
  const navigate = useNavigate();
  const [shiftData, setShiftData] = useState({
    date: new Date().toISOString().slice(0, 10),
    startingHour: "",
    endingHour: "",
  });

  const handleSetShiftDetails = (name, value) => {
    setShiftData({ ...shiftData, [name]: value });
  };
  const handleAdd = () => {
    ShiftsAPI.addNewShift(shiftData)
    navigate("/shifts");
  };

  const handleCancel = () => {
    navigate("/shifts");
  };

  return (
    <div className="w-full h-screen p-4 space-y-10">
      <h1 className="text-lg lg:text-3xl ml-10 lg:ml-0">Add Shift</h1>
      <div className="flex flex-col items-center w-full h-1/2">
        <div className="flex flex-col md:justify-center items-center space-y-4 md:space-y-0 w-1/2 mt-10">
          <ShiftForm
            shift={shiftData}
            handleSetShiftDetails={handleSetShiftDetails}
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

export default AddShiftPage;
