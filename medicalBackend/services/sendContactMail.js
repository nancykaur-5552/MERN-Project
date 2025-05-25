const nodemailer = require("nodemailer");

const sendContactMail = async({ name, email, subject, message }) =>{
     let config = {
    service: "gmail",
    auth: {
      user: "nancykaur7270@gmail.com", // your Gmail
      pass: "uhwz ukwm cphr glax",       // your App Password
    },
};

let transporter = nodemailer.createTransport(config);
let contactMessage = {
  from: email, // user's email from the contact form
  to: "nancykaur7270@gmail.com", // your receiving email
  subject: `New Contact Us Message: ${subject}`,
  text: `You have received a new message from ${name} (${email}). Subject: ${subject}. Message: ${message}`,
  html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
};
 await transporter.sendMail(contactMessage);
};

module.exports = sendContactMail;