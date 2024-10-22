const shiftsRepo = require("../repositories/shiftsRepo");

const getAllShifts = (filters) => {
  return shiftsRepo.getShifts(filters);
};

const getShiftById = (id) => {
  return shiftsRepo.getShiftById(id);
};

const addShift = (shift) => {
  return shiftsRepo.addShift(shift);
};

const updateShift = (id, shift) => {
  return shiftsRepo.updateShift(id, shift);
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
};
