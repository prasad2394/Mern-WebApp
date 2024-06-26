const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

// Two way to route the auth
// router.get("/", (req, res) => {
//     res
//     .status(200)
//     .send("Auth Router is Working...")
// });

router.route("/").get(authControllers.home);

router.route("/register").post( validate(signupSchema), authControllers.register);

router.route("/login").post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);


module.exports = router;