const jwt = require('jsonwebtoken');
const User = require('../../models/User.model');
const Appointment = require("../../models/Appointment.model");
require('dotenv').config();

const getUserProfile = async (req, res) => {
  try {
    const accessSecret = process.env.ACCESS_SECRET_KEY;
    if (!accessSecret) {
      return res.status(500).json({ message: 'Server config error' });
    }

    // Extract token from Authorization header: "Bearer <token>"
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token missing' });

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, accessSecret);
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Find user by decoded id
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const appointments =  await Appointment.find({userId: user._id}).sort({date: -1});
   
    console.log("Fetched Appointments: ", appointments.length);
    
    res.status(200).json({
      ...user.toObject(),
      appointments,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching profile' });
  }
};

module.exports = getUserProfile;
