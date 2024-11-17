const express = require('express');
const employeesShiftsServices = require('../services/employeesShiftsServices');

const router = express.Router();

//Entry point: 'http://localhost:3000/employeesShifts'

//Get all shifts of each employee
router.get('/', async (req, res) => {
    try {
        const employeeShifts = await employeesShiftsServices.getAllEmployeesShifts();
        res.json(employeeShifts);    
    } catch (error) {
        res.json(error.message);
    }
});

router.get('/byShiftId', async(req, res) => {
    try {
        const { shiftId } = req.query; 
        const employeesShift = await employeesShiftsServices.getEmployeesShiftByShiftId(shiftId);
        res.json(employeesShift);
    } catch (error) {
        res.status(500).json(error.message);
    }
});


//Get shift of employee by id
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const employeeShift = await employeesShiftsServices.getEmployeeShiftById(id);
        res.json(employeeShift);
    } catch (error) {
        res.json(error.message);
    }
});

//Add employee to the shift
router.post('/', async (req, res) => {

    try {
        const employeeShift = req.body;
        const result = await employeesShiftsServices.addEmployeeShift(employeeShift);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//Delete employee from shift
router.delete('/:id', async (req, res) => {

    try {
        const {id} = req.params;
        const result = await employeesShiftsServices.deleteEmployeeShift(id);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});






module.exports = router;