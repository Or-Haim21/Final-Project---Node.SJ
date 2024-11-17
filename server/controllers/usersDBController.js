const express = require('express');
const usersDBServices = require('../services/usersDBServices')

const router = express.Router();

//Entry point: 'http://localhost:3000/users'

router.get('/', async (req, res) => {
    try {
        const users = await usersDBServices.getAllUsers();
        res.json(users);    
    } catch (error) {
        res.json(error.message)
    }
});

module.exports = router;