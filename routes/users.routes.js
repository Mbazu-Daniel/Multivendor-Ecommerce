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
const { authMiddleware } = require("../middleware/authMiddleware");


router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/user/:id", authMiddleware, getAUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update", authMiddleware, updateUser)
router.patch("/block/:id", authMiddleware, isAdmin, blockUser);
router.patch("/unblock/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
