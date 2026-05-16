require("dotenv").config();
//require express
const express= require("express");
const { connect } = require("mongoose");
const app =express();
//middleware json
app.use(express.json());
//simple logger
if(process.env.NODE_ENV==="dev"){
    app.use((req,res,next)=>{
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    });
}
//route test
app.get ("/bunyan",(req,res)=>{
    res.status(200).json({msg:"test route"})
});
//connection DB 
const connectDB =require("./config/db")
connectDB();
//port
const port =process.env.PORT ||3000;
//run server
app.listen(port,()=>{
    console.log(`server running in port ${port}`);
})