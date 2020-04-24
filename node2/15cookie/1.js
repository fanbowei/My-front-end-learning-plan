/*
cookie
    cookie本质是一个字符串,里面包含着游览器和服务器沟通的信息(交互时产生的信息)
    存储的形式以 key:value的形式储存
    游览器会自动携带该网站的cookie,只要是该网站下的cookie,全部携带

分类
    会话cookie(关闭游览器之后,会话cookie会自动消失,会话cookie存储在游览器上面运行的那块内存上)
    持久化cookie(看过期时间,一旦到了过期时间,自动销毁,储存在用户的硬盘上面)

工作原理
    当游览器第一次请求服务器的时候,服务器可能返回一个或者多个cookie给游览器
    游览器会判断cookie的类型
    以后请求该网站的时候会自动携带该网站的所有cookie
    服务器拉动之前自己种下的cookie,分析里面的内容,校验cookie的合法性,根据cookie的保存的内容,进行具体的业务逻辑

应用
    解决http无状态(例子:7天免登录,一般不会单独使用cookie,一般配合后唐session存储使用)

不同的语言,不同的后端架构的cookie的距离语法是不一样的,但是cookie的原理和工作过程是不会变得
cookie一般是由服务器生成,前端生成的cookie几乎没有意义
*/



const express = require('express')
let cookiepar=require('cookie-parser')
const app = express()
const port = 3000
app.disable('x-powered-by');//隐藏服务器的具体实现

//引入cookie中间件

//使用中间件,解析游览器带过来的cookie为一个对象,随后挂在到req对象上
app.use(cookiepar());

app.get('/', (req, res) => {
    //给客户端种下一个会话cookie
    res.cookie('DEMO1',123)
    //给客户端种下一个持久化cookie
    res.cookie('DEMO2',123,{maxAge:30*1000})  //持续30秒
    res.send('种下了一个cookie')
})


app.get('/test',(req,res)=>{
    let cookier=req.cookies
    res.send(cookier)
})

app.get('/test2',(req,res)=>{
    res.cookie('DEMO1','',{maxAge:0})//立即过期
    res.send('删除了demo1')
})

app.get('/test3',(req,res)=>{
    res.clearCookie('DEMO1')//全部删除
    res.send('删除了')
}) 
app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))
