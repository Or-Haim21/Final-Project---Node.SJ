const express = require('express');
const employeeServices = require('../services/employeeServices');

const router = express.Router();

//Entry point: 'http://localhost:3000/employees'

//Get Full data of employees: employee details, his department and shifts
router.get('/', async (req, res) => {
    try {
        const employees = await employeeServices.getFullDataOfEmployees();
        res.json(employees);    
    } catch (error) {
        res.json(error.message)
    }
});

//Get employee by his id 
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const employee = await employeeServices.getEmployeeById(id);
        res.json(employee);
    } catch (error) {
        res.json(error.message);
    }
})

//Add new employee
router.post('/', async (req, res) => {
    try {
        const employee = req.body;
        const result = await employeeServices.addEmployee(employee);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
   
});

//Update employee
router.put('/:id', async (req, res) => {

    try {
        const {id} = req.params;
        const employee = req.body;
        const result = await employeeServices.updateEmployee(id, employee);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});


//Delete e,ployee 
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await employeeServices.deleteEmployee(id);
        res.json(result);
    } catch (error) {
        res.json(err.message);
    }
});

module.exports = router;