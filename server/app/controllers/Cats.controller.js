const {getCatsApi} = require("../api/cats.api");

class CatsController {
  getCats() {
    return getCatsApi()
      .then(cats => ({cats}));
  }
}

module.exports = CatsController;

