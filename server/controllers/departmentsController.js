const express = require('express');
const departmentsServices = require('../services/departmentsServices');


const router = express.Router();

//Entry point: 'http://localhost:3000/departments'

//Get Full data of departments: department details, manager and employees
router.get('/', async (req, res) => {
    try {
        const departments = await departmentsServices.getFullDataOfDepartments();
        res.json(departments);
    } catch (error) {
        res.json(error.message);
    }
});

//Add new department
router.post('/', async (req, res) => {
    try {
        const department = req.body;
        const result = await departmentsServices.addDepartment(department);
        res.status(201).json(result)       
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//Update department
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const department = req.body;
        const result = await departmentsServices.updateDepartment(id, department);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});

//Delete department
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await departmentsServices.deleteDepartment(id);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;