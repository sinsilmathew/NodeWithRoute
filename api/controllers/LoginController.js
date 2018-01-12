const mongoose = require('mongoose');
const Login = mongoose.model('Login');
const bodyParser = require('body-parser');
const Add_Login = function(req,res){
    const NewLogin = new Login(req.body);
    NewLogin.save(function(err,login){
        if(err){res.send(err)}
        else{res.json(login)}
    })
}

module.exports.Add_Login = Add_Login;