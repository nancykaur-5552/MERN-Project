const router = require("express").Router();

const register = require("../../controllers/auth/register");
const login = require("../../controllers/auth/login");

router.post("/login",login);
router.post("/register",register);


module.exports = router;