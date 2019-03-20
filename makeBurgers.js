const db = require('./models/');
const newBurgers = [{burger_name: "maui waui burger"},{burger_name: "bacon cheeseburger"}]

console.log(db.Burgers);

db.sequelize.sync({ force: true })
    .then(function() {
        db.Burgers.bulkCreate(newBurgers)
    }).catch(function(err){
        console.log(err)
    })

