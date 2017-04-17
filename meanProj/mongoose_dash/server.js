var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express();
var mongoose = require('mongoose')

var connection = mongoose.connect("mongodb://localhost/animal_db");

var MongSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String
});

var Mong = mongoose.model('Mong', MongSchema)

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');



//routes start
app.get('/', function(req, res){
  Mong.find({}, function(error, results){
    if(error) {
      console.log(error);
    }
    res.render('index', {dis_mong: results})
  })
});


//new
app.get('/new', function(req, res){
  res.render('new')
});


//create new mongoose
app.post('/', function (req, res){
  //creating a new moongoose
  Mong.create(req.body, function(error, result){
    console.log(req.body);
    if (error){
      console.log(error);
    }
    res.redirect('/')
  })
});





//show mongoose
app.get('/:id', function(req, res){
  Mong.find({ _id: req.params.id }, function(error, response){
    if (error){
      console.log(error);
    }
    res.render('show', {dis_mong: response[0] });
  });
});


app.get('/:id/edit/', function(req, res){
  Mong.find({ _id: req.params.id}, function(error, response){
    if (error){
      console.log(error);
    }
    res.render('edit', {dis_mong: response[0]});
  })
});


//update mongoose
app.post('/:id', function(req, res){
  Mong.update({_id: req.params.id}, req.body, function(error, result){
    if (error){
      console.log(error);
    }
    res.redirect('/')
  })
});

//delete mongoose
app.post('/:id/delete', function(req, res){
  Mong.remove({ _id: req.params.id }, function(error, result){
    if (error){
      console.log(error);
    }
    res.redirect('/')
  })
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})
