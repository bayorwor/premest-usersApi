const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUser,
} = require("../controllers/usersControllers");

const router = Router();

router.route("/users").get(getUsers).post(createUser);

router.get("/users/:id", getUser);

module.exports = router;
