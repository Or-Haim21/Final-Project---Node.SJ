const express = requier('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

//Entry point: 'http://localhost:3000/authentication

router.post('/login', (req, res) => {
    const {username, email} = req.body;

});
