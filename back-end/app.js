const express = require("express")
const app=express();
const cors = require("cors")
require("dotenv").config();
require("./conn/conection")
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,()=>{console.log("Server is running")});