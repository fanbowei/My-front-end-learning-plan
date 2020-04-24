///路由就是如何定义应用的端点(urls)以及如何响应客户端的请求
//路由是一个由url,http请求和若干个句柄组成的

// route的定义
// 我们可以将路由定义三个部分
// 第一部分http请求(get或者put)
// 第二部分url路径
// 第三部分回调函数


const express = require('express')
const app = express()
const port = 3000

//根路由
app.get('/',(req,res)=>{
    res.send('我是首页')
})

//一级路由
app.get('/meishi',(req,res)=>{
    res.send('我是美食的一级路由')
})
app.get('/meishi/:id', (req, res) => {
    res.send('我是美食路由下面的'+req.params.id)
})
app.listen(port, () => console.log(`服务器启动成功 Server running at  http://127.0.0.1:${port}`))

/*
request
    request.query 查询字符串的参数拿到的是一个对象
    request.params 获取参数路由的参数,是一个对象
    request.body 获取post请求体,拿到的是一个对象
    request.get 获取请求头中的指定的key对象的value
*/


/*
response
    response.send() 给游览器做出一个响应
    response.end() 给游览器做出一个响应(不会自动追加响应头)
    response.download(绝对路径) 告诉游览器下载一个文件
    response.sendfile(相对路径) 给游览器发送一个文件
    response.redirect() 重定向到一个新的地址
    response.set(key,value) 自定义响应头内容
    response.get() 获取响应头指定key的value
    response.status(code) 设置响应状态码
*/