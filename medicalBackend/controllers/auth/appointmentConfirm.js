const emailhelper = require("../../services/sendEmail");

const sendEmail = async (req, res) => {
    try {
        const { email, firstName, date, time, doctor } = req.body;
        await emailhelper({ email, firstName, date, time, doctor });
        res.status(200).json({ success: true, msg: "Email sent successfully." });
    } catch (error) {
        console.log("Email sending failed: ", error);
        res.status(500).json({ success: false, error: "Failed to send email." });
    }
};
module.exports = { sendEmail };