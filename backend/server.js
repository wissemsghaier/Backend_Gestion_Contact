const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json())

const contactRoute = require('./Routes/ContactRoutes.js')
app.use('/contact',contactRoute)

mongoose.connect('mongodb://localhost:27017/test_data', {
useNewUrLParser:true,
useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'))
db.once('open', function(){
console.log('databse connected sucessfully')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Middleware to parse JSON bodies

//app.get('/', (req, res) => {
  //res.send('Hello World!');
//});
