
// Import express framework
const express = require('express');
const upload = require('./upload');

let indexRouter = require('./routes/index');

// Initialize express
const app = express();
// Set up a view engine
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index');
 })

 // Define the index router
app.use('/', indexRouter);

// Define the port number
const PORT = 5000;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})