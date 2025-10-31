const mongoose = require('mongoose');

async function connectBD(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.error("Cannot Connect to DB");
    }
}

module.exports = connectBD