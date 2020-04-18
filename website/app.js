/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear(); 
 





navigator.geolocation.getCurrentPosition( position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    const data = {lat,lon};
    console.log(lat, lon);
    fetch('/all', () => {
        method: 'POST',
        Headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

});