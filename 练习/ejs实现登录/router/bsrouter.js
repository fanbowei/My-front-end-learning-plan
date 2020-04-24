let {Router}=require('express')
let db=require('../db/db.js')
bsrouter=new Router()
let sha1=require('sha1')


    //处理注册路由
    bsrouter.post('/register',async (req,res)=>{
        //获取用户的输入
        const {email,password,nick_name,re_password}=req.body
        //校验数据的合法性
            // 账号地址(email)
        const emailreg=/^[a-zA-Z0-9]\w{4,15}$/
            //昵称校验
        const nickreg=/[\u4e00-\u9fa5a-zA-Z0-9]/gm;
            // 密码校验
        const passwordreg=zzbds=/[a-zA-Z0-9_@#$%\.]{2,16}/;
        let errmsg={}
            if(!emailreg.test(email))
            {
                errmsg.email="账号格式非法"
            }
            if(!nickreg.test(nick_name))
            {
                errmsg.nick_name="昵称格式非法(不允许有符号)"
            }
            if(!passwordreg.test(password))
            {
                errmsg.password="密码格式非法"
            }
            if(!password===re_password)
            {
                errmsg.re_password="密码不一致"
            }
            //检测错误对象是否为空
            if(JSON.stringify(errmsg)!=='{}')
            {
                res.render('register',{errmsg,neterr:''})
                return
            }
            
    
            
        //注册过--驳回,未注册--注册
        //该账号是否注册过
        try {
            if(await db.usermodle.findOne({email:email}))
            {
                errmsg.email='账号已被注册'
                res.render('register',{errmsg})
                return
            }
            await db.usermodle.create({email,nick_name,password:sha1(password)})
            res.redirect(`/login/?emailto=${email}`)
        } catch (error) {
            //1.计数 //2.引入警报模块
            console.log(error);
            res.render('register',{errmsg:{},neterr:'网络不稳定'})
        }   
    })
    
    
    bsrouter.post('/login',async (req,res)=>{
        const {email,password}=req.body
        const emailreg=/^[a-zA-Z0-9]\w{4,15}$/
        const passwordreg=zzbds=/[a-zA-Z0-9_@#$%\.]{2,16}/;
        let errmsg={}
        errmsg.emailto;
            if(!emailreg.test(email))
            {
                errmsg.email="账号格式非法"
            
            }
            if(!passwordreg.test(password))
            {

                errmsg.password="密码非法"
    
            }

            //检测错误对象是否为空
            if(JSON.stringify(errmsg)!=='{}')
            {
                res.render('login',{errmsg})
                return
            }
            try 
            {
                let finder=await db.usermodle.findOne({email,password:sha1(password)})
                if(!finder)
                {
                    errmsg.email='账号或密码错误'
                    errmsg.password='账号或密码错误'
                    res.render('login',{errmsg})
                    return
                   
                }
                //在服务器中开辟一块内存存储session
                //将用户的id存入上一步开辟的session中
                //获取session的编号,放入一个cookie中
                //将上一步cookie的返回给客户端
                
                req.session._id=finder._id
                res.redirect(`user/`)
            } 
            catch (error) {
               console.log(error)
               errmsg.neterr='网络不稳定';

               res.render('login',{errmsg})
            }
    
    }) 

    module.exports=bsrouter