const User = require("../../models/User.model");
const {registrationValidation} = require("../../services/validationSchema");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req, res, next) =>{
    try{
        const accessSecret = process.env.ACCESS_SECRET_KEY;
        console.log("AccessSecret: ", accessSecret);
        const registerResponse = await registrationValidation.validateAsync(req.body);
        const { username, email, password, mobile, address } = registerResponse;
        console.log(registerResponse);
        const userInfo={
            username,
            email,
            password, 
            mobile,
            address,
        }

        const existingUser = await User.findOne({
            email,
        });
        
        if(existingUser){
            console.log("User already registered."); 
            return res.status(400).json({
                message: "User already registered. Please Login.",
                isNewUser: false,
            });
        }
        const jwtToken = jwt.sign(userInfo, accessSecret,  { expiresIn: "1h" });
        console.log(jwtToken);
        const newUser = new User({
            username,
            email,
            address,
            password,
            mobile,
            token: jwtToken,
        });

        await newUser.save();

        return res.status(201).json({
            message: "User registered Successfully.",
            success: true,
        });
    }catch(error){
        next(error);
    }
};

module.exports = register;