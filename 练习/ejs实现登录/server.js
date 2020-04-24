const express = require('express')
const app = express()
const port = 3000
const cookiepr=require('cookie-parser')
let db=require('./db/db.js')
let uirouter=require('./router/uirouter.js')
let bsrouter=require('./router/bsrouter.js')
//引入session库和mongo库
const session=require('express-session');
const Mongostore=require('connect-mongo')(session);

 //配置模板引擎
app.set('view engine','ejs')
//设置模板所在的目录
app.set('views',__dirname+'/views')
app.use(express.urlencoded({extended:true}))
    app.use(express.static(__dirname+'/public'))
//连接服务器
app.listen(port, () => console.log(`服务器启动,Server running at  http://127.0.0.1:${port}`))
//连接数据库 当数据库连接成功处理路由,失败退出
    db.linkmongo().then(()=>{
    //使用内置中间件处理post请求体参数
    app.use(express.urlencoded({extended:true}))
    app.use(cookiepr())
    

         //配置cookie和session组合对象的配置对象
        app.use(session({
        name:'hh', //设置cookie的name,默认值是connect.sid
        secret:'fbw',//参与加密的字符串(又称签名)
        saveUninitialized:false,//是否在储存会话之前创建session
        resave:true,//是否在每次请求时,强制重新保存session,即使没有变化
        store:new Mongostore({
        url:'mongodb://localhost:27017/cookie',
        touchAfter:3600,//修改频率
        
        }),
        cookie:{
        httpOnly:true,//开启后前端无法通过js操作cookie
        maxAge:1000*30 //设置cookie的过期时间
        }
    }))


    //使用路由器中间件
    app.use(uirouter)
    app.use(bsrouter)


   

    
    






    

 

}).catch((err)=>{
    console.log(err);
})