const users = require("../data/users");

const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};
