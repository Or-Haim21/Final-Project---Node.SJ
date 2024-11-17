import React, { useEffect, useState } from "react";
import Button from "../../../../components/button";
import ShiftsAPI from "../../../../API/ShiftsAPI";

const AddShiftToEmployee = ({ handleAddShift }) => {
  const [selectedShift, setSelectedShift] = useState(null);
  const [shifts, setShifts] = useState([]);


  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const data = await ShiftsAPI.getShiftsData();
        setShifts(data);               
      } catch (error) {
        console.error("Error fetching shifts data:", error);
      }
    };
    fetchShifts();
  }, []);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const shift = shifts.find((shift) => shift._id === selectedId);
    setSelectedShift(shift);
  };

  const AddShift = () => {
    if (selectedShift) {
      //const shift = shifts.find((shift) => shift._id === selectedShift._id);
      handleAddShift(selectedShift);
    }
  };


  return (
    <div className="flex justify-center items-center space-x-4 w-full">
      <select
        id="shifts"
        name="shifts"
        value={selectedShift ? selectedShift.id : ""}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Select a shift
        </option>
        {shifts?.map((shift) => {
          const formattedDate = `${new Date(shift.date)
            .toISOString()
            .slice(0, 10)}, ${shift.startingHour}-${shift.endingHour}`;
          return (
            <option key={shift._id} value={shift._id}>
              {formattedDate}
            </option>
          );
        })}
      </select>
      <Button label="Add shift" onClickFunction={AddShift} />
    </div>
  );
};

export default AddShiftToEmployee;
