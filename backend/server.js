import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";



//app config
const app = express();
const port = 9000;

//middlwares
app.use(express.json());
app.use((req,res,next)=> {
    req.setHeaders("Access-Controll-Allow-Origin","*");
    res.setHeader("Access-Controll-Allow-Headers","*");
    next();
})
//db config
const connectionString = "mongodb+srv://admin:admin@cluster0.rp1yc.mongodb.net/tiktokdb?retryWrites=true&w=majority";
mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

//api endpoints
app.get("/",(req, res) => res.status(200).send("hello world"));
app.get("/v1/posts",(req,res)=> res.status(200).send(Data));

app.get("/v2/posts",(req, res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
})

app.post("/v2/posts",(req, res)=>{
    const dbVideo = req.body;
    Videos.create(dbVideo,(err,data)=> {
         if(err){
            res.status(500).send(err);
         } else {
            res.status(201).send(data);
         }
    })

})

//listener 
app.listen(port,()=>console.log(`listen on port : ${port}`));