var db = require('../models/');
var burgers = [];

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    db.Burgers.findAll()
      .then(function(burgers) {
        res.render("index", {burgers});
      })
      .catch(function(err){
        console.log(err);
        res.sendStatus(404);
      })
  });

  app.post("/api/burger", function(req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name
    }).then(function(data){
      console.log(data);
      res.redirect('/');
    }).catch(function(err){
      console.log(err);
      res.sendStatus(404);
    })
     
   });
   
   app.put("/:id", function(req, res) {
     db.Burgers.update(
       {devoured: true},{
       where: {
         id: req.params.id
       }
     }).then(function(data){
       console.log(data);
       res.sendStatus(200);
     }).catch(function(err){
       console.log(err);
     })
     
   });
   
   app.put("/cook/:id", function(req, res) {
    
    db.Burgers.update(
      {devoured: false},{
      where: {
        id: req.params.id
      }
    }).then(function(data){
      console.log(data);
      res.sendStatus(200);
    }).catch(function(err){
      console.log(err);
      res.sendStatus(404);
    })
   });
   
   app.delete("/delete/:id", function(req, res) {
      db.Burgers.destroy({
        where : {
          id: req.params.id
        }
      })
        .then(function(data){
          console.log(data);
          res.sendStatus(200);
      })
        .catch(function(err){
          console.log(err);
          res.sendStatus(404);
        })
   });

}






