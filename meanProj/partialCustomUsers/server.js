var express = require("express")
var path = require("path")


app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));

var app = express();

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
