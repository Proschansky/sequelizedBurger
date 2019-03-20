var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 8060;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// allows for PUT or DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger_controller.js")(app);

// ap/p.use(routes);

app.listen(port, function(){
    console.log("Listening on:", port)
});