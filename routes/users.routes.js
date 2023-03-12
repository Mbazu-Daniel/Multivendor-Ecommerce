const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getAUser,
  deleteUser,
  updateUser,
} = require("../controller/users.controllers");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getAUser);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id", updateUser);

module.exports = router;
