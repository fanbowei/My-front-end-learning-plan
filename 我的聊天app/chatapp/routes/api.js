var express = require('express');
var router = express.Router();
var db=require('../db/db')

/* GET users listing. */
router.get('/getuserlist',async function(req,res){
    let data= await db.usermodle.find({enable_flag:"Y"})
    res.send(data)
})

router.post('/updatauserlist', async function(req,res){
    let d=req.body;
    await db.usermodle.updateMany({enable_flag:"Y"},{enable_flag:"N"})
    d.forEach(async (i) => {
        await db.usermodle.create({email:'qqq',username:i.username,password:'qqq',headering:i.headering,socketid:'null',isonline:'false'})
    });
    res.send('修改成功')
})

router.post('/register',async (req,res)=>{
    let d=req.body;
    let dbs=await db.usermodle.findOne({username:d.username})
    if(!dbs){
        let num=function(min,max){
            return Math.floor(Math.random()*(max-min))+min;
        }
        let head=`http://192.168.124.3:3000/images/${num(1,5)}.jpg`
        await db.usermodle.create({username:d.username,password:d.mima,headering:head,socketid:'null',isonline:"false",})
        res.send('ok')

    }
    else
    {

        res.send('no')
    }
})

router.post('/login',async (req,res)=>{
    let d=req.body;
    let dbs=await db.usermodle.findOne({username:d.username,password:d.mima})
    if(dbs)
    {
        res.send({state:'ok',dbs})
    }
    else
    {

        res.send({state:'no'})
    }

})


module.exports = router;