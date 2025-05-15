const joi = require("joi");

const registrationValidation = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    mobile: joi.string().pattern(/^\d+$/).required(),
    address: joi.string().required(),
    
});

const loginValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const addUserValidation = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    mobile: joi.string().pattern(/^\d+$/).required(),
    address: joi.string().required(),
    disease: joi.string().required(),
    age:joi.number()
    .integer()
    .min(0)
    .max(150)
    .required()
});


module.exports = {registrationValidation, loginValidation, addUserValidation}