const express = require('express');
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//importando rutas
const customerRoutes = require('./routes/customer')


//settings
app.set('port' , process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') )
app.use(express.urlencoded({extended: false}));

//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: "localhost",
    user: "root",
    password : "",
    port: 3306,
    database: "crudtodolist"
}, 'single'));


//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log("Server on port 3000...");
})