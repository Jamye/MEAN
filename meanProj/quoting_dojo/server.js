var express = require('express')

var app = express();

var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/quotes_dojo');
var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Blank name, try again"], minlength: 5},
  quote: {type: String, required: [true, "Blank quote, try again"], minlength: 10},
  time: {type: Date, default: Date.now}
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));

var path = require('path')

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('index')
})

app.post('/process', function(req, res){
  console.log("POSTDATA", req.body);
  // res.redirect('/quotes')
  var user = new User ({name: req.body.name, quote: req.body.quote})
  user.save(function(error){
    if(error) {
      console.log('Something went wrong');
      res.render('index', "Something went wrong")
    } else {
      console.log('Successfully added quote!');
      res.redirect('/quotes')
    }
  })
})

app.get('/quotes', function(req, res){
  User.find({}, function(error, users){
    console.log(users);

    res.render('results', {info: users})
  })
})



app.listen(8000, function() {
  console.log("listening on port 8000");
})
