const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    UserName :{
        type:String,
        required : 'Username Required'
    },
    password :{
        type:String,
        required:'Password Required'
    },
    LoginCount:{
        type:Number,
        default:0

    }
});
module.exports=mongoose.model('Login',LoginSchema);