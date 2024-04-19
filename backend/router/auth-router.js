const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
// Two way to route the auth
// router.get("/", (req, res) => {
//     res
//     .status(200)
//     .send("Auth Router is Working...")
// });

router.route("/").get(authControllers.home);

router
.route("/register")
.post( validate(signupSchema), authControllers.register);

router.route("/login").post(authControllers.login);


module.exports = router;