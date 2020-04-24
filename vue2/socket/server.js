const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const server=app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))
const io=require('socket.io')(server)
const fs=require('fs')
app.use(cors());
app.get('/', (req, res) => {
    
    res.send('hello')
})


io.on('connection',function(socket){
    socket.emit('news',{hello:'world'});
    socket.on('my other event',function(data){
        console.log(data);
    });
})