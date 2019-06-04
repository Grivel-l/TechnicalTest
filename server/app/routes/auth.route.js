module.exports = app => {
  console.log("Here");
  app.post("/auth/register", (req, res) => {
    console.log("Body is: ", req.body);
    return res.send(200);
  });
  app.get("/auth/connect", (req, res) => {
    console.log(req.params);
    return res.send(200);
  });
};
