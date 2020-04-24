let socketio={}
function getsocket(server){
    socketio.io=require('socket.io')(server);  
    let io=socketio.io
    io.on('connection',function(socket){


      //当新用户连接进来向所用的人广播此人的id
      io.sockets.emit('adduser',{
        id:socket.id,
        content:'新用户加入'
      })

      //定义向用户发送信息的事件
      socket.on('senduser',function(data){
        // data={
        //   from:'',
        //   to:'',
        //   content:'',
        // }
        socket.to(data.to).emit('sendclient',data)
        
      })

      //创建群聊
      socket.on('addroom',function(data){
        let roomobj=socket.join(data.room)
      })
      socket.on('sendmsgroom',function(data){
        socket.to('data.room').emit(data)
      })


      //创建命名空间
      let qq=io.of('/qq')
      qq.on('connection',function(){
        qq.emit('news',{data:'hello'})
      })

          function 注释(){
        //socket是当前游览器某个游览器和服务器的连接对象
        // socket.emit('news',{hello:'world'});//emit 发送事件
        // socket.on('my other event',function(data){ //on监听事件
        //     socket.emit('news',{hi:'hello'})
        // });
          }
          
      })

}
socketio.getsocket=getsocket
module.exports=socketio