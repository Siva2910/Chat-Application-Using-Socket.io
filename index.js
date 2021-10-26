var express=require('express')
var socket = require('socket.io')

const port =process.env.PORT || 4000 ;

var app =express()
var server=app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})


app.use(express.static('public'))

var io=socket(server);

io.on('connection',(socket)=>{
    console.log("Made Socket Connection",socket.id)
    socket.on('chat',(data)=>{
        socket.broadcast.emit('chat',data)
        // io.sockets.emit('chat',data)
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})


