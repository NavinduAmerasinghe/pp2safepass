const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  singleUser,
  userProfile,
  allUsers,
} = require("../controllers/auth");
const { isAuthenticated } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.get("/getme", isAuthenticated, userProfile);
router.get("/user/:id", singleUser);
router.get("/users", allUsers);

module.exports = router;
