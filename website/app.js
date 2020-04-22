/* Global Variables */
//Put the credentials and base URL here

// Weather URL -> The API key is retrieved from api.js
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&${API_key}`



/* Function to POST data */
let postData = async ( url = '', data = {})=>{ //something wrong here
    const baseURL = 'http://localhost:5500'; 
    console.log(data)
    
      const response = await fetch(url, {   //url defined on linecode 10
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),     
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  postData('/test', {animal:'app.js'}) //not working

