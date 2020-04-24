const mongoose=require('mongoose')

mongoose.set('useCreateIndex',true)//去除插入警告(索引器)

//引入约束
let schema=mongoose.Schema;
//创建一个约束的实例
let usersc=new schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    headering:{
        type:String,
        required:true,
    },
    socketid:{
        type:String,
        required:true,
    },
    isonline:{
        type:Boolean,
        required:true,
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


let userchatsc=new schema({
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{//逻辑删除
        type:String,
        default:'Y'
    },
    from:{
        type:JSON,
        required:true,
    },
    fromusername:{
        type:String,
        required:true,
    },
    to:{
        type:JSON,
        required:true,
    },
    tousername:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    time:{
      type:String,
    }

})

//创建一个模型对象 第一次参数对应数据库的集合,第二个参数为约束对象
let usermodle=mongoose.model('user',usersc);
let userchatmodle=mongoose.model('userchat',userchatsc);

//连接数据库
     function linkmongo() {
        return  new Promise((succ,erro)=>{
            mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true  })
        
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



    
    module.exports = {linkmongo,usermodle,userchatmodle};