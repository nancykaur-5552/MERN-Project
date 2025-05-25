const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({message: "No token provided"});
    }
    const token = authHeader.split(" ")[1];
console.log("Token received by backend: ",token);

    try{
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        console.error("JWT verification error:", error);
        res.status(403).json({message:'Invalid token'});
    }
};

module.exports = authenticateToken;