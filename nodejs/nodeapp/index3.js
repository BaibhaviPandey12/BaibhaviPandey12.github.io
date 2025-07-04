import express from 'express'

const app = express()
app.listen(8081,()=>{
    console.log("Server started")
});
// app.get("/",(req,res)=>{
//     res.send("Hello World")
// });
// app.get('/user',(req,res)=>{
//     res.end("Hello user")
// });
// app.get('/ab*cd',(req,res)=>{
//     res.end("Hellooo")
// });
// app.get("/product",(req,res)=>{
//     res.json({name:"product1" , price:45})
// })

    const product=[
        {id:1,name:"product1" , price:45},
        {id:2,name:"product2" , price:50},
        {id:3,name:"product3" , price:55}
    ]
   app.get("/product",(req,res)=>{ 
    res.json(product)
})
  app.get("/product/:id",(req,res)=>{ 
    const pid=req.params.id;
    res.json(pid)
})

// app.get("/:name",(req,res)=>{
//     res.send(req.params.name)
// });
// app.get("/name",(req,res)=>{
//     res.send("hello")
// });
// app.get("/:name",(req,res)=>{
//     res.send("hello")
// });
// app.get("/student/:name",(req,res)=>{
//     res.end(req.params.name)
// })

// app.get("/student/:name/age/:age",(req,res)=>{
//     res.end(req.params.name+""+req.params.age)
// })

// app.get("/student/:name/:age",(req,res)=>{
//     res.end(req.params.name+" "+req.params.age)
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization);
// })

// app.get("/",(req,res)=>{
//     res.send(req.query.name+req.query.age);
// })