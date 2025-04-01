const secure = async(req,res,next)=>{
    try{
        if(!req.session() || !req.session.user()){
            res.status(401).json({
                message: "Access Denied. Please Login!!",
            })
        }
        next();
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error.",
        })
    }
};
module.exports = secure;