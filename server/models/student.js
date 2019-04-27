var mongoose=require('mongoose')
var validator = require('validator');
var student = mongoose.model('student',
{
  name:{type:String,
   // required:true,
    trim:true},

    mobile:{type: String,trim:true},

  email:{
    type:String,
    trim:true,
    minlength:1,
    //required:true,
    //unique:true,
    validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
    }
  },

  address:{
    type:String,
    trim:true,
    required:true
  }

  })
module.exports = {student}
