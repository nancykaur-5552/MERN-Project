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
})

module.exports = {registrationValidation, loginValidation}