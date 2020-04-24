const express = require('express')
const app = express()
const port = 3000
const cookiepr=require('cookie-parser')
let db=require('./db/db.js')
let uirouter=require('./router/uirouter.js')
let bsrouter=require('./router/bsrouter.js')
 //配置模板引擎
app.set('view engine','ejs')
//设置模板所在的目录
app.set('views',__dirname+'/views')

//连接服务器
app.listen(port, () => console.log(`服务器启动,Server running at  http://127.0.0.1:${port}`))
//连接数据库 当数据库连接成功处理路由,失败退出
    db.linkmongo().then(()=>{
    //使用内置中间件处理post请求体参数
    app.use(express.urlencoded({extended:true}))
    app.use(cookiepr())
    //使用路由器中间件
    app.use(uirouter)
    app.use(bsrouter)
    

 

}).catch((err)=>{
    console.log(err);
})