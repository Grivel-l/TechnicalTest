const dtb = require("mongoose").model("Auth");

class AuthModel {
  createUser(username, password) {
    return dtb.create({username, password});
  }

  getUser(username, password) {
    return dtb.find({username, password}, {username}, {lean: true});
  }
}

module.exports = AuthModel;

