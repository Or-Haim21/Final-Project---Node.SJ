const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/FactoryDB')
    .then(() => console.log('Connected to FactoryDB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;