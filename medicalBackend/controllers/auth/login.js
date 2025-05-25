const User = require("../../models/User.model");
const { loginValidation } = require("../../services/validationSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
  try {
    const accessSecret = process.env.ACCESS_SECRET_KEY;
    if (!accessSecret) {
      return res.status(500).json({
        success: false,
        message: "Access secret key is not defined in environment variables.",
      });
    }

    const loginResponse = await loginValidation.validateAsync(req.body);
    const { email, password } = loginResponse;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email Address. Please register.",
        isNewUser: true,
      });
    }

    const passwordMatching = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatching) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password.",
      });
    }

    const jwttoken = jwt.sign(
      {
        id: existingUser._id, 
        username: existingUser.username,
        email: existingUser.email,
      },
      accessSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      username: existingUser.username,
      email: existingUser.email,
      token: jwttoken,
    });
  } catch (error) {
    console.error("Login server error:", error); // Log real error
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = login;
