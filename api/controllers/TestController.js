const mongoose = require('mongoose');
User = mongoose.model('Users');
exports.list_all_users=function(req,res){
    User.find({},function(err,user){
        if(err){res.send(err)}
        else{res.json(user)}
    });
};
exports.create_user=function(req,res){
    user_input=new User({
        name:"Test User",
        age:10
    });
    user_input.save(function(err,user){
        if(err){res.send(err)}
        else{res.json(user)}
    });
}
//module.exports=list_all_users;