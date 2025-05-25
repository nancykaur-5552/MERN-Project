const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    mobile:{
        type: Number,
        trim: true,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    disease:{
        type:String,
    },
    age:{
        type:Number,
    },
});

module.exports = model("User", UserSchema, "users");