const express = require('express')
const app = express()
const port = 3000
let db=require('../db/db.js')

 
//使用内置中间件处理post请求体参数
app.use(express.urlencoded({extended:true}))



//连接服务器
app.listen(port, () => console.log(`服务器启动,Server running at  http://127.0.0.1:${port}`))
//连接数据库 当数据库连接成功处理路由,失败退出
db.linkmongo().then(()=>{
    //处理注册路由
app.post('/register',async (req,res)=>{
    //获取用户的输入
    const {email,password,nick_name,re_password}=req.body
    //校验数据的合法性
        // 邮箱地址(email)
    const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        //昵称校验
    const nickreg=/[\u4e00-\u9fa5]/gm;
        // 密码校验
    const passwordreg=zzbds=/[a-zA-Z0-9_@#$%\.]{2,16}/;
        if(!emailreg.test(email))
        {
            res.send('邮箱格式非法')
            return
        }
        if(!nickreg.test(nick_name))
        {
            res.send('昵称非法合法')
            return
        }
        if(!passwordreg.test(password))
        {
            res.send('密码非法')
            return
        }
        if(!password===re_password)
        {
            res.send('密码不一致')
            return
        }
        //检测邮箱是否注册
        

        
    //注册过--驳回,未注册--注册
    //该邮箱是否注册过
    try {
        if(await db.usermodle.findOne({email:email}))
        {
            res.send(`注册失败,${email}邮箱已注册`)
            return
        }
        await db.usermodle.create({email,nick_name,password})
        res.send('注册成功')
    } catch (error) {
        //1.计数 //2.引入警报模块
        console.log(error);
        res.send('网络不稳定了')
    }   
})


app.post('/login',async (req,res)=>{
    const {email,password}=req.body
    const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const passwordreg=zzbds=/[a-zA-Z0-9_@#$%\.]{2,16}/;
        if(!emailreg.test(email))
        {
            res.send('邮箱不存在或密码错误')
            return
        }
        if(!passwordreg.test(password))
        {
            res.send('密码错误')
            return
        }
        try {
            if(!await db.usermodle.findOne({email}))
            {
                res.send('用户不存在')
                return
            }
            if(!await db.usermodle.findOne({password}))
            {
                res.send('邮箱不存在或密码错误')
                return
            }
            res.redirect('http://baidu.com')
        } catch (error) {
           console.log(error)
           res.send('网络不稳定') 
        }

})  


//发送登录页面/ ui路由
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/login.html')
})
//发送注册页面
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/register.html')
})
}).catch((err)=>{
    console.log(err);
})