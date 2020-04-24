const express=require('express')

//创建app服务对象
let app=express();
app.disable('x-power.by')//隐藏发送出去的服务器框架


//设置路由   响应路由是一个匹配的过程

app.get('/',(req,res)=>{//根路由

    res.send('我是主界面')
})

app.get('/meishi',(req,res)=>{//一级路由
    
    // res.send('我是美食页面')
    res.send(JSON.stringify(req.query))//query只能适用于get提交数据
    
})


app.post('/demo',(req,res)=>{

    res.send('收到了post请求')
})




app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        
        console.log("服务器启动成功");
    }
})
