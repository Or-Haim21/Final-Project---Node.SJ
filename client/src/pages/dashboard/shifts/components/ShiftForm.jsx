import React, { useEffect, useState } from "react";
import FieldAndLabel from "../../../../components/fieldAndLabel";

const ShiftForm = ({ shift, handleSetShiftDetails }) => {
  const [shiftData, setShiftData] = useState({
    date: new Date().toISOString().slice(0, 10),  // Format to yyyy-MM-dd
    startingHour: "",
    endingHour: "",
  });

  useEffect(() => {
    if (shift) {
      setShiftData({
        ...shift,
        date: shift.date ? shift.date.slice(0, 10) : "",  // convert the date to format of yyyy-MM-dd format
      });
    }
  }, [shift]);

  const handleInputChange = (name, value) => {
    const updatedDetails = { ...shiftData, [name]: value };
    setShiftData(updatedDetails);
    handleSetShiftDetails(name, value);
  };

  return (
    <div className="w-1/2">
      <form>
        <FieldAndLabel
          field={{
            type: "date",
            name: "date",
            value: shiftData.date,
          }}
          label={"Date"}
          setFieldValue={handleInputChange}
        />
        <FieldAndLabel
          field={{
            type: "time",
            name: "startingHour",
            value: shiftData.startingHour,
          }}
          label={"Starting Hour"}
          setFieldValue={handleInputChange}
        />
        <FieldAndLabel
          field={{
            type: "time",
            name: "endingHour",
            value: shiftData.endingHour,
          }}
          label={"Ending Hour"}
          setFieldValue={handleInputChange}
        />
      </form>
    </div>
  );
};

export default ShiftForm;
