const express = require('express')
const app = express()
const port = 3000
let db=require('./db/db.js')
let uirouter=require('./router/uirouter.js')
let bsrouter=require('./router/bsrouter.js')
 

//连接服务器
app.listen(port, () => console.log(`服务器启动,Server running at  http://127.0.0.1:${port}`))
//连接数据库 当数据库连接成功处理路由,失败退出
    db.linkmongo().then(()=>{
    //使用内置中间件处理post请求体参数
    app.use(express.urlencoded({extended:true}))

    //使用路由器中间件
    app.use(uirouter)
    app.use(bsrouter)

 

}).catch((err)=>{
    console.log(err);
})