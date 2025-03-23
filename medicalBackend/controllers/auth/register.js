const User = require("../../models/User.model");
const {registrationValidation} = require("../../services/validationSchema");

const register = async(req, res, next) =>{
    try{
        const registerResponse = await registrationValidation.validateAsync(req.body);
        const { username, email, password, mobile, address } = registerResponse;
        console.log(registerResponse);

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

        const newUser = new User({
            username,
            email,
            address,
            password,
            mobile
        });

        await newUser.save();

        return res.status(201).json({
            message: "User registered Successfully.",
            success: true
        });
    }catch(error){
        next(error);
    }
};

module.exports = register;