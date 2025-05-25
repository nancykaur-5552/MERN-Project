const emailhelper = require("../../services/sendContactMail");

const sendContactMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    // Call your email helper with necessary data
    await emailhelper({ name, email, subject, message });

    res.status(200).json({ success: true, msg: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email sending failed:", error);
    res.status(500).json({ success: false, error: "Failed to send message." });
  }
};

module.exports = { sendContactMail };
