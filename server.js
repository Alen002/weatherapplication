// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Body-Parser for Post requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

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


// Initiate JS object named project data
projectData = {}; 

// GET route Setup naming the route and callback arrow function to return the JS object projectData
app.get('/get', (req, res) => {
    res.send('hi');
});

//POST route is working on Postman
app.post('/add', (req, res) => {
    res.send('POST route working');
  });















//Retrieve data from the API with fetch()


/* app.post('/add',function info(req, res) {

    projectData.temp = req.body.temp;
    
    projectData.date = req.body.date;
    
    projectData.content = req.body.content;
    
    res.send(projectData);
    
    console.log(projectData);}) */

  