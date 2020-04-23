

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// ****************** Server-Side Routes ****************** //


/* Empty JS object to act as endpoint for all routes */
projectData = {};

app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// TODO-ROUTES!
/* app.post('/add', (request, response) => {
    response.send('POST received'); 
 });

 */
// POST an animal
const data = [];

app.post('/add', (request, response) => {
    
    data.push(request.body); //receive the data from postData in app.js and make it actionable with request.body
    response.send(data);
});


