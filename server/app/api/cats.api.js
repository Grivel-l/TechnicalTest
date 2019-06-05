const fetch = require("node-fetch");

module.exports = {
  getCatsApi: () => {
    return fetch("http://shibe.online/api/shibes?count=30")
      .then(response => response.json());
  }
};

