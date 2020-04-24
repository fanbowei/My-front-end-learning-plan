var express = require('express');
var router = express.Router();
var db=require('../db/db')

/* GET users listing. */
router.get('/getuserlist',async function(req,res){
    let data= await db.usermodle.find({})
    res.send(data)
})


module.exports = router;