// set up server 
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var noteRouter = require('./route/noteRouter')
var storeRouter = require('./route/store.route')
var loginRouter = require('./route/login.route')
var bookRoute = require('./route/book.route');
var userRoute = require('./route/user.route');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var app = express()



app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
  res.send('server start ............ ')
})
app.use("/api/v1" , noteRouter);
app.use("/api/v1" , storeRouter);
app.use("/api/v1" , bookRoute);
app.use("/api/v1" , userRoute);
app.use("/api/v1" , loginRouter);

app.listen(3000 , ()=>{
    console.log('Server start ...... ');
} );
module.exports = app
