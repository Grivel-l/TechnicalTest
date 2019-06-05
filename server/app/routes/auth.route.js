const AuthController = new (require("../controllers/Auth.controller"))();

module.exports = (app, connectedUsers) => {
  app.post("/auth/register", (req, res) => {
    return AuthController.createUser(req.body.username, req.body.password, connectedUsers)
      .then(result => res.status(200).send(result))
      .catch(error => {
        console.error(`An error occured: ${error}`);
        return res.status(500).send({error: "An unknow error occured"});
      });
  });
  app.get("/auth/connect", (req, res) => {
    console.log(req.params);
    return res.status(200).send({});
  });
};
