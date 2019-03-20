var db = require('../models/')

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    console.log("burgers");
    db.Burgers.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

}






