const fetch = require("node-fetch");

module.exports = {
  getCatsApi: () => {
    return fetch("http://shibe.online/api/cats?count=30")
      .then(response => response.json());
  }
};

