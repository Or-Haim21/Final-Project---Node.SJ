const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema(
    {
        date: {type: Date, required: true}, //need to change the date to format yyy/dd/mm
        startingHour: {type: Number, required: true},
        endingHour: {type: Number, required: true}

    },
    {versionKey: false}
);

const Shift = mongoose.model('shift', shiftSchema);
module.exports = Shift;
