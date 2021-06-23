const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true, minlength:7},
    password2:{type:String, required:true,  minlength:7}},
    {timestamps:true}         
);

const User = mongoose.model('User',userSchema);
module.exports = User;
