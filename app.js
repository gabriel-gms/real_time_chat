import express from "express"
import path from "path"
import http from "http"
import { Server } from "socket.io"

const app = express()

app.use(express.static(path.join('public')))

const server = http.createServer(app)
server.listen(5500, ()=>{
    console.log("running!!")
})

const io = new Server(server)

io.on('connection', (socket) => {
  console.log("alguem entrou no chat");
  
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('show message', msg)
  });
});
