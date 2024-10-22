const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const employeesRouter = require('./controllers/employeesController');
const departmentRouter = require('./controllers/departmentsController');
const employeeShiftsController = require('./controllers/employeeShiftsController');
const shiftsController = require('./controllers/shiftsController');



const PORT = 3000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/employees', employeesRouter);
app.use('/departments', departmentRouter);
app.use('/employeeShift', employeeShiftsController);
app.use('/shifts', shiftsController);



app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);