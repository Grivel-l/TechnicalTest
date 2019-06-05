module.exports = dtb => {
  return dtb.model("Auth", new dtb.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  }));
};

