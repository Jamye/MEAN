/*
The file above does a couple of things. First, it connects to the database.
Second, it loads all of the models in the models path (in our case server/models).
*/

//require mongoose
var mongoose = require('mongoose');

//require path for getting the models path
var fs = require('fs');

//require path for getting the models path
var path = require('path');

//connect to mongoose
mongoose.connect('mongodb://localhost/Modular1');

//create a variable that points to the path where all the models live
var models_path = path.join(__dirname, './../models');

//read all of the files in the models_path an require(run) each of the JS files
fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' file);
  }
})
