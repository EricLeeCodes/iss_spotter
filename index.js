const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('207.102.85.29', (error, data) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  console.log("It worked! Coordinates:", data);
});