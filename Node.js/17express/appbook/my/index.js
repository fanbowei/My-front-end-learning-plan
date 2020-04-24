let express=require('express');
let app=express();

app.get('/',function (req,res) {
    res.send('<h1>我是首页</h1>')
  })
  
  app.listen(8000,()=>{
    console.log('服务器启动成功')
  })