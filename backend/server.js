const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
const Car = require('./models/Car.js');
require('dotenv').config();
require('./config/db.js');
const PORT = 3000;


const app = express();


// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //

// START ROUTES //

app.post("/cars", async (req, res) => { // Route 1
    let newCar = req.body.data
    console.log(newCar);
    let dbResponse = await Car.create(newCar);
    res.send(dbResponse);
});

app.get("/cars", async (req, res) => { // route 2
    let carList = await Car.find();
    res.status(201).send(carList);
});

app.get("/cars/:carName", async (req, res) => {
    let dbRes = Car.findOne({ name: req.params.carName });
    if (!dbRes) return res.status(422).send(`No car with the name ${req.params.carName}`)
    else return res.json(dbRes);
})

// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});