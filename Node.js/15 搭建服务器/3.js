let myapp=require('./2.js')

let app=new myapp();

app.on("/",(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h1>这是首页</h1>')
})

app.on('/gnxw',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h1>国内新闻</h1>')
})

app.on('/gwxw',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h1>国外新闻</h1>')
})
app.run(80,function(){
    console.log('服务器启动!')
})