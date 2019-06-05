const AuthController = new (require("../controllers/Auth.controller"))();

module.exports = (app, connectedUsers) => {
  app.post("/auth/register", (req, res) => {
    return AuthController.createUser(req.body.username, req.body.password, connectedUsers)
      .then(result => res.status(200).send(result))
      .catch(error => {
        console.error(`An error occured: ${error}`);
        return res.status(500).send({error: "An unknown error occured"});
      });
  });
  app.get("/auth/login", (req, res) => {
    return AuthController.connectUser(req.query.username, req.query.password, connectedUsers)
      .then(result => res.status(200).send(result))
      .catch(error => {
        if (error.status === 403) {
          return res.status(403).send({error: "Forbidden"});
        }
        console.error(`An error occured: ${error}`);
        return res.status(500).send({error: "An unknown error occured"});
      });
  });
};
