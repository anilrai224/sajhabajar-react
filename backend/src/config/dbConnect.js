const mongoose = require('mongoose');
const url = process.env.DB;

async function connect() {
    try {
        await mongoose.connect(url); 
        console.log('Connected To Database');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect;
