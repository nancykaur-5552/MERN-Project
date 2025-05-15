const router = require("express").Router();

const register = require("../../controllers/auth/register");
const login = require("../../controllers/auth/login");
const addUser = require("../../controllers/auth/AddUser")
const getUser = require("../../controllers/auth/getUser");
const deleteUser = require("../../controllers/auth/deleteUser");
const updateUser = require("../../controllers/auth/updateUser");
const {createPayment,getPayment,updatePayment,cancelPayment,confirmPayment}= require("../../controllers/auth/Payment");
const {sendEmail} = require("../../controllers/auth/appointmentConfirm");

router.post("/register",register);
router.post("/login",login);
router.post("/addUser", addUser);
router.get("/getUser",getUser);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser', updateUser);
router.post("/createPayment", createPayment);
router.get("/getPayment",getPayment);
router.post("/updatePayment",updatePayment);
router.post("/cancelPayment",cancelPayment);
router.post("/confirmPayment",confirmPayment);
router.post("/sendEmail", sendEmail);


module.exports = router;