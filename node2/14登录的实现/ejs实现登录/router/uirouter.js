const express = require('express')
const router = new express.Router()
const path=require('path')
const port = 3000
let db=require('../db/db.js')
 




//发送登录页面/ ui路由
router.get('/login',(req,res)=>{
    const {emailto}=req.query;
    res.render('login',{errmsg:{emailto}})
})
//发送注册页面
router.get('/register',(req,res)=>{
    res.render('register',{errmsg:{},neterr:''})
})

//发送个人中心页面
router.get('/user',(req,res)=>{

    
    if(req.cookies._id)
    {
        
        async function scle(){
            try {
                let finder= await db.usermodle.findOne({_id:req.cookies._id})
                if(finder)
                {
                    res.render('user',{name:finder.nick_nake})
                }
            } catch (error) {
                console.log('用户修改了数据')
                res.redirect('/login')
            }
                   
        }
        scle();

    }
    else
    {
        res.redirect('/login')
    }
})

module.exports=router;