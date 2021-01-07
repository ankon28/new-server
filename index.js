const express = require("express");
const exphbs = require('express-handlebars')
const app = express();
app.engine('handlebars',exphbs())
app.set('view engine',"handlebars")
app.get('/', function(req,res){
    res.send('about')
})
app.listen(7000, console.log('server is running'))

