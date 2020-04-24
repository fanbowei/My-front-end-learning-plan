const express = require('express')
const router = new express.Router()
const path=require('path')
const port = 3000

 




//发送登录页面/ ui路由
router.get('/login',(req,res)=>{
    
    res.sendFile(path.resolve(__dirname,'../')+'/public/login.html')
})
//发送注册页面
router.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../')+'/public/register.html')
})

module.exports=router;