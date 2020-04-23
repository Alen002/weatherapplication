/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder */
app.use(express.static('website'));
const port = 3000;

/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    console.log(`running on localhost: ${port}`);
  };


/************* Routes ***************/

/* Empty JS object to act as endpoint for all routes */
const projectData = [];
// data received from the client is posted/saved to the projectData array located on the server
app.post('/add', (request, response) => {   
    //receive the data from postData in app.js and make it actionable with request.body
    projectData.push(request.body); 
    response.send(projectData);
});

//data from the projectData array is send back to the client
app.get('/all', (request, response) => {
    response.send(projectData);
});
