const express = require("express")
const app = express();
const cors = require("cors")
const blogs = require("./routes/blogs")
require("dotenv").config();
require("./conn/conection")
app.use(cors());
app.use(express.json());

app.use("/api/v1",blogs);
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT, () => { console.log("Server is running") });