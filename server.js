// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Define API path and port
const api = require('./server/routes/api');
const port = 3000;

// Create a server instance
const app = express();

// static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers for POST data
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

// Specify the API route
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Listen on provided port
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});