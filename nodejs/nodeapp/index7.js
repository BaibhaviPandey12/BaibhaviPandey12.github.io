import express from 'express'
const app = express()
app.listen(8081,()=>{
    console.log("Heloo World")
});
//app.use("/images",express.static("images"));
app.use(express.static("public"))

app.get("/products",(req,res)=>{
    res.send("Product list");
});
