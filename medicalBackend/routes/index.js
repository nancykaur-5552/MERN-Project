const router = require("express").Router();

const apiRoutes = require("./api/index");

router.use("/api",apiRoutes);

router.use("/api",(res,req,next)=>{
    next(
        console.log("The route you are trying to access does not exist.")
    );
});

router.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.json({
        error:{
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

module.exports = router