/* Global Variables */
//Put the credentials and base URL here

// Weather URL -> The API key is retrieved from api.js
/* const url = `https://api.openweathermap.org/data/2.5/weather?q=London&${API_key}`
const baseURL = 'http://localhost:5500';  */


/* Function to POST data */
const postData = async ( url= '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  
  postData('/add', {animal:'lion'}) // '/add' is passing in the URL of the POST route on server.js