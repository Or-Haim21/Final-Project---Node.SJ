const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        startWorkYear: Number,
        departmentID: String 
    },
    {versionKey: false}
);

const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee;
