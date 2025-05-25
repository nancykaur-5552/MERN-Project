const Appointment  = require("../../models/Appointment.model");

const bookAppointment = async(req,res) =>{
    try{
        const{firstName, lastName, gender, address, email, mobile, doctor, date, time, condition,} = req.body;
        const userId = req.user.id;

        const newAppointment = new Appointment({
            userId,
            firstName,
            lastName,
            gender,
            address,
            email,
            mobile,
            doctorName: doctor,
            date,
            time,
            condition,
            status:"Booked",
        });

        await newAppointment.save();

        res.status(201).json({success: true, appointment: newAppointment});
    }catch(error){
        console.error("Booking failed:",error);
        res.status(500).json({success: false, message: "Failed to book appointment"});
    }
};

module.exports = {bookAppointment};