const express = require("express");
const jwt = require("jsonwebtoken");
const usersWSServices = require("../services/usersWSServices");
const usersDBServices = require("../services/usersDBServices");

const router = express.Router();

//Entry point: 'http://localhost:3000/auth

router.post("/login", async (req, res) => {
  const { username, email } = req.body;

  try {
    const { data: users } = await usersWSServices.getAllUsers();
    const userWS = users.find(
      (user) => user.email === email && user.username === username
    );
    if (!userWS) {
      res.json("User not found!");
      return;
    }
    const user = await usersDBServices.getUserByName(userWS.name);
    if (!user) {
      res.json("User not found!");
      return;
    }
    //TODO: need to keep it in environment variables and get it from there
    const SECRET_KEY = "secret_key";
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    const userData = {
      id: user._id,
      name: user.name,
      numOfActions: user.numOfActions,
      currentlyAllowedActions: user.currentlyAllowedActions,
      token,
    };
    res.json(userData);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
