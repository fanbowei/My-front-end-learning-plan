const mongoose=require('mongoose')

mongoose.set('useCreateIndex',true)//去除插入警告(索引器)

//引入约束
let schema=mongoose.Schema;
//创建一个约束的实例
let usersc=new schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    nick_name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{//逻辑删除
        type:String,
        default:'Y'
    }
});


//创建一个模型对象 第一次参数对应数据库的集合,第二个参数为约束对象
let usermodle=mongoose.model('user',usersc);


//连接数据库
     function linkmongo() {
        return  new Promise((succ,erro)=>{
            mongoose.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true,useNewUrlParser: true  })
        
            //监听连接的状态
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



    
    module.exports = {linkmongo,usermodle};