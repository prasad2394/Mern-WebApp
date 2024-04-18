const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// Two way to route the auth
// router.get("/", (req, res) => {
//     res
//     .status(200)
//     .send("Auth Router is Working...")
// });

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);

module.exports = router;