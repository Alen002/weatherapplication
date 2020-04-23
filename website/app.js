/* Global Variables */
apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
zipCode = '78738';
apiKey = `&${API_key}`;

/* Client-Side side defined POST route */
const postData = async ( url= '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      //body data type must match "Content-Type" header   
      body: JSON.stringify(data),      
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      } catch(error) {
        console.log("error", error);
      }
  }




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

/* data retrieved from the web api is posted to the POST route server */
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
