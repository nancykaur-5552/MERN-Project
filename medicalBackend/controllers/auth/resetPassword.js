const User = require("../../models/User.model");
const bcrypt = require("bcryptjs");
const {resetPasswordValidation} = require("../../services/validationSchema")
const Otp = require("../../models/Otp.model");

const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = await resetPasswordValidation.validateAsync(req.body);

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
           
        const validOtp = await Otp.findOne({ email: email.toLowerCase(), otp });
        if (!validOtp) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();

        await Otp.deleteMany({ email: email.toLowerCase() });
        return res.status(200).json({ message: "Password reset successfully 🎉", success: true });
    } catch (error) {
        console.error("Error in resetPassword:", error);
        return res.status(400).json({ message: error.message });
    }
};

module.exports = resetPassword;