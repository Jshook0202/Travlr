// Bring in DB and Schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'))

// Delete records and insert data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close and exit connection
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});