/* Global Variables */
//Put the credentials and base URL here
/* let projectData = {}; */

/* Client-Side side defined POST route */
const postData = async ( url= '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      } catch(error) {
        console.log("error", error);
      }
  }

/** WEP API - Get JSON data from openweathermap.org with a async GET fetch request */
apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
zipCode = '78738';
apiKey = `&${API_key}`;

// await needs to be implemented whenever asnyc is being used
const getData = async (apiURL, zipCode, apiKey) => {  
      const response = await fetch(apiURL + zipCode + apiKey);
        try {
          //data is the JSON dataset retrieved from the openweathermap API
          //data.main.temp for example would retrieve the actual temperature from the API
          const data = await response.json(); 
          console.log(data);
          return data;
        } catch(error) {
          console.log("error", error);
        };
};  

// The data is posted to the POST route in server.js
getData(apiURL, zipCode, apiKey)
    .then(data => {
        postData('/add', {
            temp: data.main.temp,
            date: Date(),
            userResponse: 'My comment'
        });
    });


// Alternative way to Post the API data is to use only a fetch request without async//
/* const getTemp = fetch(apiURL + zipCode + apiKey )
.then(response => response.json())
.then(data => {
    console.log(data)
    postData('/add', {
        temp: data.main.temp,
        date: Date(),
        userResponse: 'My comment'
    });  
}); 
getTemp; */
