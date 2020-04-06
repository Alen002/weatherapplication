// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/** 
Initialize the main project folder
Connect server-side code in server.js to the client-side code stored in the website folder
*/
app.use(express.static('website'));
const port  = 3000;


// Setup Server
const server = app.listen (port, ()=>{
    console.log(`running on localhost: ${port}`)
    });

/**
Initiate the projectData object globally to act as the API endpoint
The data received from the API (=openweathermap.org API) will be stored in the object
*/
projectData = {}; 

//Retrieve data from the API with fetch()
fetch()




// GET route Setup naming the route and callback arrow function to return the JS object projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});






  