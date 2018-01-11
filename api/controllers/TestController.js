const mongoose = require('mongoose');
User = mongoose.model('Users');
exports.list_all_users=function(req,res){
    User.find({},function(err,user){
        if(err){res.send(err)}
        else{res.json(user)}
    });
};
// exports.create_user=function(req,res){
//     user_input=new User({
//         name:"Test User",
//         age:10
//     });
//     user_input.save(function(err,user){
//         if(err){res.send(err)}
//         else{res.json(user)}
//     });
// }

const create_user=function(req,res){
    user_input=new User({
        name:"Test User",
        age:10
    });
    user_input.save(function(err,user){
        if(err){res.send(err)}
        else{res.json(user)}
    });
};
const delete_user = function(req,res){
User.remove({
    _id:req.params.user_id},function(err,task){
        if(err){res.send(err)}
        else{res.json({message:"User Deleted Successfully"})}
 });
};

const delete_user_byName = function(req,res){
    User.remove({
        name:req.params.user_name},function(err,task){
            if(err){res.send(err)}
            else{res.json({message:"User Deleted Successfully"})}
     });
    };

module.exports.create_user=create_user;
module.exports.delete_user=delete_user;
module.exports.delete_user_byName = delete_user_byName;