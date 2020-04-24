let http=require('http');
//创建server服务器对象
// console.log(http)
let server=http.createServer()
//监听对当前服务器对象的请求
server.on('request',function(req,res){
    //当服务器被请求时,会触发请求事件,并传入请求对象
    // res.end('helloworld')
    // console.log(req)
    //设置res头部
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //根据路径信息的不同,显示不同的信息
    if(req.url=='/')
    {
        res.end('<h1>首页</h1>')
    }   
    else if(req.url=='/gnxw')
    {
        res.end('国内新闻')
    }
    else if(req.url=='/gwxw')
    {
        res.end('国外新闻')
    }
    else
    {
        res.end('404')
    }
    
})
//监听服务器的端口号
server.listen(80,function () {
    //启动监听端口号成功触发
    console.log('服务器启动成功')
  })