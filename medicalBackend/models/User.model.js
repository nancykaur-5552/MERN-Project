const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
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
        required: true,
        minlength: 3,
        maxlength: 40
    },
    mobile:{
        type: Number,
        trim: true,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

module.exports = model("User", UserSchema, "users");