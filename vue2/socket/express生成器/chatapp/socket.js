let socketio={}
function getsocket(server){
    socketio.io=require('socket.io')(server);  
    let io=socketio.io
    io.on('connection',function(socket){
          //socket是当前游览器某个游览器和服务器的连接对象
        socket.emit('news',{hello:'world'});//emit 发送事件
        socket.on('my other event',function(data){ //on监听事件
            console.log(data);
            socket.emit('news',{hi:'hello'})
        });
      })

}
socketio.getsocket=getsocket
module.exports=socketio