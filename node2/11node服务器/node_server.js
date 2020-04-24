//引入http模块
const http=require('http');
const qr=require('querystring')

//创建服务(server)对象  函数接受两个参数 请求 和 响应
let server=http.createServer((request,response)=>{

    //request 请求对象--客户端发给服务器
    
    //response 响应对象 --服务器返回给客户端

    //请求发过来的参数为查询字符串参数
    let strurl=request.url.split('?')[1]//去掉字符串的/?
    let urlobj = qr.parse(strurl) //将传过来的字符串转换成对象的形式
    console.log(urlobj)
    response.setHeader('content-type','text/html;charset=utf-8')//设置游览器渲染方式和字符编码
    // response.end('收到了信息')//本次请求响应结束
    if(request.url=='/')
    {
        response.end('首页');
    }
    else if(urlobj.name)
    {
        response.end(JSON.stringify(urlobj))//只能传字符串
    }
    else
    {
        response.end('404 notfound')
    }
})


//绑定端口监听  
server.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('服务器启动成功')
    }
})