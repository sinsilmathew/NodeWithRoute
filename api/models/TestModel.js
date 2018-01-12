const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:'Name Required'
    },
    age:{
        type:Number,
        required:'Age is required'
    },
    Created_date:{
        type:Date,
        default:Date.now
    }
    
});
module.exports = mongoose.model('Users',UserSchema);