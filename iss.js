const request = require('request');
let ipAdress;



const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    error,
      response,
      body;

    const IP = JSON.parse(body);
    ipAdress = IP.ip;
    callback(error, ipAdress);
  });

  // use request to fetch IP address from JSON API
};


const fetchCoordsByIP = function(ip, callback) {
  request("http://ipwho.is/" + ip, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    if (!data.success) {
      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }

    const { latitude, longitude } = data;
    callback(null, { latitude, longitude });
  });
};



module.exports = { fetchMyIP, fetchCoordsByIP };
