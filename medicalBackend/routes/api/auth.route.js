const router = require("express").Router();
const register = require("../../controllers/auth/register");
const login = require("../../controllers/auth/login");
const addUser = require("../../controllers/auth/AddUser")
const getUser = require("../../controllers/auth/getUser");
const deleteUser = require("../../controllers/auth/deleteUser");
const updateUser = require("../../controllers/auth/updateUser");
const {createPayment,getPayment,updatePayment,cancelPayment,confirmPayment}= require("../../controllers/auth/Payment");
const {sendEmail} = require("../../controllers/auth/appointmentConfirm");
const forgotPassword = require("../../controllers/auth/forgotPassword");
const resetPassword = require("../../controllers/auth/resetPassword");
const getUserProfile= require('../../controllers/auth/userController');
const {sendContactMail} = require("../../controllers/auth/contactMailConfirm");
const authenticateToken = require("../../middlewares/authMiddleware")
const {bookAppointment} = require("../../controllers/auth/bookAppointment")

router.post("/register",register);
router.post("/login",login);
router.get('/profile',authenticateToken, getUserProfile);
router.post("/addUser", addUser);
router.get("/getUser",getUser);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser', updateUser);

router.post("/createPayment", createPayment);
router.get("/getPayment/:paymentIntentId",getPayment);
router.put("/updatePayment/:paymentIntentId",updatePayment);
router.post("/cancelPayment/:paymentIntentId",cancelPayment);
router.post("/confirmPayment/:paymentIntentId",confirmPayment);

router.post("/sendEmail", sendEmail);
router.post("/sendContactMail", sendContactMail);

router.post("/forgotPassword",forgotPassword);
router.post("/resetPassword", resetPassword);

router.post("/bookAppointment", authenticateToken,bookAppointment);

module.exports = router;