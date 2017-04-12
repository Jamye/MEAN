/*
In order to link them, however, we need a way to access
the "app" variable from within the routes.js file. We wrap the routes in a
function where we can pass in the app as a parameter so that we can set up our
routing rules in the routes.js file.
*/


//require mongoose
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

//exports function with APP and ALL the routes its using.
module.exports = function(app){

  app.get('/', function(req, res) {
    res.render("index");
  })
  app.post('/quotes', function(req,res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  })
  app.get('/main', function (req, res) {
    Quote.find({}, function (err, quotes){
      res.render('main', {quotes:quotes});
    });
  })

}
