var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {

  show: function (req, res) {
    Quote.find({}, function(err, quotes){
      res.render('main', {quotes: quotes});
    })
  },

  create: function (req, req) {
    var quote = new Quote({name : req.body.name, quote: req.body.quote});
    quote.save(function (err){
      if (err) {
        console.log("Error happend during creation");
      } else {
        res.redirect('/main');
      }
    })
  }
}
