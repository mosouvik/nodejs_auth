const router = require("express").Router();
const UserController = require("../controller/UserController");
const verify=require('../middleware/VerifySignup')
//const AuthController = require("../controllers/AuthController");

router.get("/", UserController.register);
router.post("/register",[verify.checkDuplicateEntries], UserController.register_create);
router.get("/login",UserController.login);
// router.get("/user-dashboard", UserController.userAuth, UserController.userDashboard);
// router.get("/logout", UserController.logout);

module.exports = router;