const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        managerID: String
    },
    {versionKey: false}
);

const Department = mongoose.model('department', departmentSchema);
module.exports = Department;
