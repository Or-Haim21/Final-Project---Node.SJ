const mongoose = require("mongoose");

const employeeShiftSchema = mongoose.Schema(
  {
    employeeID: { type: String, required: true },
    shiftID: { type: String, required: true },
  },
  { versionKey: false }
);

const EmployeeShift = mongoose.model("employeeShift",employeeShiftSchema, 'employeesShifts');
module.exports = EmployeeShift;
