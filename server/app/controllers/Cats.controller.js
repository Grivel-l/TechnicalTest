const {getCatsApi} = require("../api/cats.api");

class CatsController {
  getCats() {
    return getCatsApi()
      .then(cats => {
        console.log("Cats: ", cats);
        return ({cats});
      });
  }
}

module.exports = CatsController;

