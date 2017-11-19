var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Firstname, lastname & email
var SignUpSchema = new Schema({
  Firstname: { type : String,required : true },
  lastname: { type : String , required : true},
  email: { type : String , unique : true, required : true},
  createdAt: {type : Date , default : Date.now}
});
var model = mongoose.model('SignUp', SignUpSchema);
module.exports = model;
