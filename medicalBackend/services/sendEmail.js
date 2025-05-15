const nodemailer = require("nodemailer");

const sendEmail = async ({ email, firstName, date, time, doctor }) => {

  let config = {
    service: "gmail",
    auth: {
      user: "nancykaur7270@gmail.com", // your Gmail
      pass: "uhwz ukwm cphr glax",       // your App Password
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: "nancykaur7270@gmail.com",
    to: email,
    subject: "Appointment Confirmation",
    text: `Hello ${firstName}, your appointment with ${doctor} is confirmed on ${date} at ${time}.`,
    html: `
      <p>Dear <b>${firstName}</b>,</p>
      <p>Your appointment has been successfully booked with <b>${doctor}</b>.</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <br />
      <p>Thank you for choosing our service!</p>
    `,
  };

    await transporter.sendMail(message);
};

module.exports = sendEmail;
