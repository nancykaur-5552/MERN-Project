const User = require("../../models/User.model");
const {addUserValidation} = require("../../services/validationSchema")
const addUser = async (req, res, next) => {
    try {
        const { name, age, address, mobile, disease, email } = await addUserValidation.validateAsync(req.body);

        if (!name || !age || !address || !mobile || !disease || !email) {
            return res.status(400).json({ message: "Please fill all the details." });
        }
        const newUser = new User({
            name,
            age,
            address,
            email,
            disease,
            mobile,
        });

        await newUser.save();
        res.status(201).json({ message: "User added successfully", user: newUser,});
    } catch (error) {
        console.error("Error in addUser: ",error);
        return res.status(500).json({message: "Server Error ",error});
    }
};
module.exports = addUser;