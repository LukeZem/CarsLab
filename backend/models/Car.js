const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        name: String,
        make: String,
        model: String,
        year: String
    },
    {
        timestamps: true
    });


const Car = mongoose.model('Car', carSchema)
module.exports = Car;