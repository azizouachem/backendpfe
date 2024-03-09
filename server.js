const express =  require("express")
const BodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")
//const morgan = re
const app =  express()

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors())
    
const   userRoute = require('./routes/userRoute.js')

app.use('/user',userRoute);
mongoose.connect('mongodb://localhost:27017/TTLOCATE', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});

app.listen(3000, '127.0.0.1', () => {
    console.log("app is running on port " + 3000);
})
