const http=require('http')
const path=require('path')

//封装服务器
class myapp{
    constructor(){
        this.server=http.createServer();//创建服务器
        this.things={};//存放事件
        this.server.on('request',(req,res)=>{
            //解析路径
            let url=path.parse(req.url);
            if('/'+url.name in this.things)
            {
                this.things['/'+url.name](req,res);
            }
            else{
                res.setHeader('content-type','text/html;charset=utf-8')
                res.end('<h1>404</h1>')
            }
        })
    }
    on(url,fn){
        this.things[url]=fn;
    }
    run(port,callback){
        this.server.listen(port,callback)
    }
}

module.exports=myapp