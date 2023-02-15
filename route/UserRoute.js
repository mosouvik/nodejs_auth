const router = require("express").Router();
const UserController = require("../controller/UserController");
const verify=require('../middleware/VerifySignup')
//const AuthController = require("../controllers/AuthController");

router.get("/", UserController.register);
router.post("/register",[verify.checkDuplicateEntries], UserController.register_create);
router.get("/login",UserController.login);
router.post("/login_create",UserController.login_create);
router.get("/dashboard",UserController.userAuth,UserController.dashboard);
 router.get("/logout", UserController.logout);

module.exports = router;