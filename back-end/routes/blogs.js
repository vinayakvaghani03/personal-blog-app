const router=require("express").Router();
const blogs = require("../model/blogs");

//POST
router.post("/post", async (req,res)=>{
    try {
        const {title,desc}=req.body;
        const newpost= new blogs({title,desc});
        await newpost.save()
        .then(()=>{res.status(200).json({message:"Data saved successfully"})})
    } catch (error) {
        res.status(400).json({message:"Some error has occured"});
    }
});

// get all blogs
router.get("/getAll", async (req,res)=>{
    try {
        const data = await blogs.find().sort({createdAt : -1});
        res.status(200).json({data : data})
    } catch (error) {
        res.status(400).json({message:"some error grt from get route"})
    }
})
// get recent 3 blog
router.get("/getRecentblogs", async (req,res)=>{
    try {
        const data = await blogs.find().sort({createdAt : -1}).limit(3);
        res.status(200).json({data : data})
    } catch (error) {
        res.status(400).json({message:"some error grt from get route"})
    }
})
// get blogs by id
router.get("/getBlog/:id", async (req,res)=>{
    try {
        const {id}= req.params;
        const data = await blogs.findById(id);
        res.status(200).json({data : data})
    } catch (error) {
        res.status(400).json({message:"some error grt from get route"})
    }
})
// update blogs daata
router.put("/updateBlog/:id", async (req,res)=>{
    try {
        const {id}= req.params;
        const { title,desc }= req.body;
        await blogs.findByIdAndUpdate(id, { title,desc });
        res.status(200).json({message : "Data was updated by update route"})
    } catch (error) {
        res.status(400).json({message:"some error grt from get route"})
    }
})

module.exports = router;