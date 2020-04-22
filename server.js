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
const port  = 5500;

// Setup Server
const server = app.listen (port, ()=>{
    console.log(`running on localhost: ${port}`)
});


// Initialize an empty JS object named projectData
const projectData = {}; 

// Response with JS object when a GET request is made from the webpage (=client)
app.get('/get', (req, res) => {
    res.send(projectData);
});

//An HTTP POST request sends data to the project's endpoint, where it is stored and can be accessed through a GET request
app.post('/add', (req, res) => {
    projectData.temperature = req.body.temp;
    projectData.date = req.body.date;
    projectData.userResponse = req.body.userResponse;
    projectData.push = 'fjkgjdkflghjdfkl'
    res.send(projectData);
});
  






// POST an animal
const data = [];

app.post('/test', addAnimal);
function addAnimal (req,res){
    data.push(req.body = 'server.js');
    res.send(data)
};

