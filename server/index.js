const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const validateToken = require('./middleware/validateToken'); // Import the middleware

const employeesRouter = require('./controllers/employeesController');
const departmentRouter = require('./controllers/departmentsController');
const employeeShiftsRouter = require('./controllers/employeeShiftsController');
const shiftsRouter = require('./controllers/shiftsController');
const usersDBRouter = require('./controllers/usersDBController');
const authRouter = require('./controllers/authController');

const PORT = 3000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(validateToken); // Add the middleware here
app.use('/auth', authRouter);
app.use('/employees', employeesRouter);
app.use('/departments', departmentRouter);
app.use('/employeesShifts', employeeShiftsRouter);
app.use('/shifts', shiftsRouter);
app.use('/users', usersDBRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
