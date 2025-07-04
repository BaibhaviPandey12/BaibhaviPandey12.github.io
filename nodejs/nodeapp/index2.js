import http from 'http'

const server = http.createServer((req,res)=>{
res.end("Hello,You!!!")
})

server.listen(8081,()=>{
    console.log("Server started")
})