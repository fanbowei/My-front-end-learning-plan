const express = require('express')
const router = new express.Router()
const path=require('path')
const port = 3000
let db=require('../db/db.js')
 




//发送登录页面/ ui路由
router.get('/login',(req,res)=>{
    let {emailto}=req.query;
    res.render('login',{errmsg:{emailto}})
})
//发送注册页面
router.get('/register',(req,res)=>{
    res.render('register',{errmsg:{},neterr:''})
})
router.get('/',(req,res)=>{
    let {emailto}=req.query;
    res.render('login',{errmsg:{emailto}})
})

//发送个人中心页面
router.get('/user',async (req,res)=>{
    
    let _id=req.session._id
    //获取cookie,读取cookie中的session容器标号
    //去服务器中匹配该编号的session
    if(_id)
    {
             
            try {
                let finder= await db.usermodle.findOne({_id})
                
                if(finder)
                {
                    res.render('user',{name:finder.nick_name})
                }
            } catch (error) {
                console.log('用户修改了数据')
                res.redirect('/login')
            }
                   
       

    }
    else
    {
        res.redirect('/login')
    }
})

module.exports=router;