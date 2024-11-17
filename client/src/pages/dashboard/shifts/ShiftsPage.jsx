import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/AddNewButton";
import ShiftTable from "./components/ShiftsTable";
import ShiftsAPI from "../../../API/ShiftsAPI";
import PageHeader from "../../../components/PageHeader";



const ShiftsPage = () => {
  const navigate = useNavigate();
  const [shiftsData, setShiftsData] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const data = await ShiftsAPI.getShiftsData();
        setShiftsData(data);               
      } catch (error) {
        console.error("Error fetching employees data:", error);
      }
    };
    fetchShifts();
  }, []);

  const handleAddShift = () => {
    navigate("add-shift");
  };

  return (
    <div className="w-full p-4 space-y-10">
      <PageHeader title="Shifts" />

      <div className="flex flex-col md:flex-row md:justify-end items-center space-y-4 md:space-y-0">
        <AddNewButton onClick={handleAddShift} />
      </div>
      <div className="sm:p-6 md:p-8 lg:p-10 lg:w-full">
        <ShiftTable shifts={shiftsData} />
      </div>
    </div>
  );
};

export default ShiftsPage;
