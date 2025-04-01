const User = require("../../models/User.model");
const {loginValidation} = require("../../services/validationSchema");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async(req,res,next)=>{
    try{
        const accesssecret = process.env.ACCESS_SECRET_KEY;
        console.log("accessSecret", accesssecret);
        const loginResponse = await loginValidation.validateAsync(req.body);
        console.log(loginResponse);
        const {email, password} = loginResponse;
        const userInfo = {
            username,
            password,
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(200).json({
                success: false,
                message: "Invalid Email Address. Please register.",
                isNewUser: false,
            });
        }
        const passwordMatching = await bcrypt.compare(password, existingUser.password);

        if(!passwordMatching){
            return res.status(400).json({
                success: false,
                message: "Incorrect Password.",
            });
        }
        const jwttoken = jwt.sign(userInfo, accesssecret);
        console.log("Token: ", jwttoken);
        return res.status(201).json({
            success: true,
            message: "Login successfully",
            username: existingUser.username,
            email: existingUser.email,
            token: jwttoken,
            redirectTo: "/home",
        });
    }catch(error){
        next(error);
    }
};

module.exports = login;