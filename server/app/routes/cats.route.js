const CatsController = new (require("../controllers/Cats.controller"))();

module.exports = app => {
  app.get("/cats", (req, res) => {
    return CatsController.getCats()
      .then(result => res.status(200).send(result))
      .catch(error => {
        console.error(`An error occured: ${error}`);
        return res.status(500).send({error: "An unknown error occured"});
      });
  });
};

