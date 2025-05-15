const User = require("../../models/User.model");
const updateUser = async (req, res) => {
    try {
        const userId = req.param.id;
        const updateData = req.body;

        delete updateData.password;
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
        });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({message: "Server error while updating user."});
    }
};
module.exports = updateUser;