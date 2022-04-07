const users = require("../data/users");

// all users
const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

// get user by id
const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId); // use only two equal signs because the userId is a string but the actual id in the array is a number

  if (!user) {
    return res.status(400).json({ success: false, message: "user not found" });
  }

  res.status(200).json({ success: true, data: user });
};

// create user
const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.status(200).json(users);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
