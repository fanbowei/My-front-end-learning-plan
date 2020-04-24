let db=require('./db/db.js')
let socketio={}
function getsocket(server){
    socketio.io=require('socket.io')(server);  
    let io=socketio.io
    io.on('connection', function(socket){

      //接受一个登录事件更新状态
      socket.on('login',async (data)=>{
        //判断是否有人登录
        let sqlstr=await db.usermodle.findOne({username:data.username})
        if(sqlstr.isonline){
          socket.to(sqlstr.socketid).emit('login',{state:'no',msg:'异地登录'})
        }

        //修改数据库登录信息
          await  db.usermodle.updateOne({username:data.username},{isonline:true,socketid:socket.id},(err,docs)=>{
          if(err)
          {
            console.log('更新失败');
            console.log(docs);
          }
        })
        socket.emit('login',{msg:'登录成功',state:'ok'})
        //更新用户状态
        let obj=await db.usermodle.find({})
        io.sockets.emit('usersupdata',obj)
        //发送数据库中有关当前用户的聊天的数据
        let obj2=await db.userchatmodle.find({fromusername:data.username})
        let obj3=await db.userchatmodle.find({tousername:data.username})
        
        obj2.forEach(async (item)=>{
          
          item.from=JSON.parse(item.from)
          item.to=JSON.parse(item.to)
          
          socket.emit('backmsg',item)
        })
        obj3.forEach(async (item)=>{
          
          item.from=JSON.parse(item.from)
          item.to=JSON.parse(item.to)
          
          socket.emit('backmsg',item)
        })



        
      })

      //监听断开事件更新状态
    socket.on('disconnect',async ()=>{
    try {
      console.log('断开连接');
    await  db.usermodle.updateOne({socketid:socket.id},{isonline:false,socketid:null},(err,docs)=>{
      if(err)
      {
        console.log('更新失败');
        console.log(docs);
        
      }
      })

      //用户下线更新状态
      let obj=await db.usermodle.find({})
      io.sockets.emit('usersupdata',obj)
    } catch (error) {
      console.log('error');
    }
      })


      //监听获取用户列表事件
      socket.on('getuserlist',async ()=>{
        let list=await db.usermodle.find({});
        socket.emit('senduserlist',list)
      })

      //监听发送消息事件
      socket.on('sendmsg',async (data)=>{  
       if(data.to.isonline==true)
       {
        socket.to(data.to.socketid).emit('backmsg',data)
       }
       await db.userchatmodle.create({from:JSON.stringify(data.from),to:JSON.stringify(data.to),content:data.content,fromusername:data.from.username,tousername:data.to.username,time:data.time})
      })

})

  

}
socketio.getsocket=getsocket
module.exports=socketio