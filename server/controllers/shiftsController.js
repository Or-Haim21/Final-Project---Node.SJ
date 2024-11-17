const express = require('express');
const shiftsServices = require('../services/shiftsServices');

const router = express.Router();

//Entry point: 'http://localhost:3000/shifts'

//Get all shifts
router.get('/', async (req, res) => {
    try {
        const shifts = await shiftsServices.getAllShifts();
        res.json(shifts);    
    } catch (error) {
        res.json(error.message)
    }
});

//Get shift by id
router.get('/:id', async (req, res) => {
    try {
        const {id} =  req.params;
        const shift = await shiftsServices.getShiftById(id);
        res.json(shift);
    } catch (error) {
        res.json(error.message)
    }
});

//Add new shift
router.post('/', async (req, res) => {
    try {
        const shift = req.body;
        const result = await shiftsServices.addShift(shift);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }

});

//Update shift
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const shift = req.body;
        const result = await shiftsServices.updateShift(id, shift);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});


module.exports = router;