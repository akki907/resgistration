var SignUp = require('./models/model.js')
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var MONGOLAB_URI = 'mongodb://localhost/SignUp';


// mongoose.connect(process.env.MONGOLAB_URI, function(err,response){
mongoose.connect(MONGOLAB_URI, function(err,response){
  if(err){
    console.log('failed to connect');
  }
  else {
    console.log('connected to db' +MONGOLAB_URI );
  }
})

var router = express.Router();


router.get('/api/users',function(req,res){
  Todo.find({},function(err,users){
    if(err){
      res.status(404).send(err);
    }else {
      res.status(200).send(users)
    }
  })
})

app.use('/',router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));


app.post('/api/createSignUp',createSignUp);




function createSignUp(req,res){
  var signUp = new SignUp()
  signUp.Firstname = req.body.FirstName;
  signUp.lastname = req.body.lastname;
  signUp.email = req.body.email;
  signUp.save(function(err,newUser){
       if(err){
        //  res.status(400).send('Error occurred in reating new Account');
        res.json('Data Incorrect')
       }else{
         res.json('user Created.');
       }
   });
}




app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
  console.log('listening at port 3000');
})
