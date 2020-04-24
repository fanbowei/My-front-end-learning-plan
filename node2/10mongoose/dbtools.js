const mongoose=require('mongoose')
mongoose.set('useCreateIndex',true)


//连接数据库
function linkmongodb(dbname) {
    return  new Promise((succ,erro)=>{
        mongoose.connect('mongodb://localhost:27017/'+dbname,{ useUnifiedTopology: true,useNewUrlParser: true  })    
        mongoose.connection.on('open',(err)=>{
            if(err)
            {
               console.log(err)
               erro(err)
            }
             else 
            {
            console.log('数据库连接成功')
            succ()
            }
        })
    })
   }


//创建约束条件对象
function creatscheam(scaobj) {  
    
    return new mongoose.Schema(scaobj);
     
  }

//创建数据库模型
function creatmoduledb(collectionname,scobj) {
    return mongoose.model(collectionname,scobj);
  }



   module.exports={
    linkmongodb,
    creatscheam,
    creatmoduledb

   }

   
   