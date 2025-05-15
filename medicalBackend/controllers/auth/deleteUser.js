const User = require("../../models/User.model");
const deleteUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        console.log("Delete user id: ", req.params.id);
        const deleteUser = await User.findByIdAndDelete(userId);

        if(!deleteUser){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User deleted successfully"});
    }catch(error){
        console.error("Error deleting user: ",error);
        res.status(500).json({message: "Server Error while deleting user."});
    }
};
module.exports = deleteUser;