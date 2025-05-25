const {Schema, model} = require('mongoose');

const AppointmentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    firstName:{
        type: String,
    },
    lastName:{
        type:String,
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
    doctorName:{
        type: String,
    },
    date:{
        type: String,
    },
    time:{
        type: String,
    },
    condition:{
        type:String,
    },
    status:{
        type: String,
        default: 'Booked'
    }
},{timestamps:true});

module.exports = model('Appointment', AppointmentSchema);