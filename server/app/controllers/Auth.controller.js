const crypto = require("crypto");
const uuid = require("uuid/v4");

const AuthModel = require("../models/Auth.model");

class AuthController {
  constructor() {
    this.model = new AuthModel();
  }

  encrypt(password) {
    return crypto.createHmac("md5", password + process.env.salt).digest("hex");
  }

  createToken(username, connectedUsers) {
    const token = uuid();
    connectedUsers[token] = username;
    return {token};
  }

  createUser(username, password, connectedUsers) {
    return this.model.createUser(username, this.encrypt(password))
      .then(() => this.createToken(username, connectedUsers));
  }

  connectUser(username, password, connectedUsers) {
    return this.model.getUser(username, this.encrypt(password))
      .then(user => {
        if (user.length > 0) {
          return this.createToken(username, connectedUsers);
        } else {
          return Promise.reject({status: 403});
        }
      });
  }
}

module.exports = AuthController;

