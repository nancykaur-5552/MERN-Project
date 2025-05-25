const User = require("../../models/User.model");
const Otp = require("../../models/Otp.model");
const { forgotValidation } = require("../../services/validationSchema")
const sendOtpEmail = require("../../services/sendOTP");

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
}

const forgotPassword = async (req, res) => {
  try {
    const forgotPasswordResponse = await forgotValidation.validateAsync(req.body);
    console.log(forgotPasswordResponse);
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const otp = generateOTP();
    await Otp.create({ email, otp });

    await sendOtpEmail({email, otp});

    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
}

module.exports = forgotPassword;