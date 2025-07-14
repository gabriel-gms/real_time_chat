import express from "express"
import path from "path"
import http from "http"
import socketIO from "socket.io"

const app = express()
const io = socketIO(server)

app.use(express.static(path.join('public')))

const server = http.createServer(app)
server.listen(3000, ()=>{
    console.log("running!!")
})

io.on('connection', (socket)=>{
    console.log('alguem conectou');
    
})
