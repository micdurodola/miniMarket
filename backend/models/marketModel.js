const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    images:[
        {imgUrl:{type:String}}
    ],
    address:{type:String, required:true},
    city:{type:String},
    state:{type:String}}, 
    {timestamps:true}       
);

const Market = mongoose.model('Market',marketSchema);
module.exports = Market;
