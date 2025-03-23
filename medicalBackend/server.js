const mongoose = require("mongoose");
const express = require("express");
const medicalBackend = express();
const http = require("http").Server(medicalBackend);
const routes = require("./routes");
const cors = require("cors");

medicalBackend.use(express.json());


medicalBackend.use(cors({
    origin:"*",
    methods: ["GET","POST","PUT","PATCH","HEAD","DELETE"],
})
);

medicalBackend.use(routes);

mongoose.connect("mongodb+srv://nancykaur:4VwHao3fkBqFsuG2@clusterpractice.kxzyw.mongodb.net/",)
.then(()=>{
    console.log("Mongoose Connected.");
})
.then(()=>{
    const PORT = 4000;
    http.listen(PORT,()=>{
        console.log(`Server is connected with port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})