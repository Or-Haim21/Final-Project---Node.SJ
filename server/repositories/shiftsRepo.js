const Shift = require("../models/shift");

const getShifts = () => {
  return Shift.find();
};

const getShiftById = (id) => {
  return Shift.findById(id);
};

const addShift = (shift) => {
  const newShift = new Shift(shift);
  return newShift.save();
};

const updateShift = (id, shift) => {
  return Shift.findByIdAndUpdate(id, shift);
};

module.exports = {
  getShifts,
  getShiftById,
  addShift,
  updateShift
};
