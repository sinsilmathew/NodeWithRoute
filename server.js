const express = require('express');
app = express();
port = process.env.PORT || 4400;
const mongoose = require('mongoose');
const User =require('./api/models/TestModel');
const Login = require('./api/models/LoginModel');
const bodyParser = require('body-parser');

mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost/TestUser');
mongoose.connect('mongodb://localhost/TestUser', { useMongoClient: true });
mongoose.connection.once('open',()=>console.log('Db connection Established'))
.on('error',(error)=>
{
console.warn('Warning',error);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./api/routes/TestRouter');
routes(app);


app.listen(port);
console.log(process.env.PORT);
console.log("Port"+port);