<<<<<<< Updated upstream
/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways'});
=======
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips});
>>>>>>> Stashed changes
};

module.exports = {
    travel
};