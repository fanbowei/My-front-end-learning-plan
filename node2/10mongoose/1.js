const mongoose=require('mongoose')
// console.log(mongoose);
mongoose.set('useCreateIndex',true)//去除插入警告(索引器)

//引入约束
let schema=mongoose.Schema;
//创建一个约束的实例
let studentsc=new schema({
    stu_id:{
        type:String,//学号为字符串
        require:true,//限制学号为必填信息
        unique:true,//限制学号是唯一的
    },
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    sex:{
        type:String,
        require:true,
    },
    hobby:[String],//爱好以数组的形式存入\
    info:{
        type:schema.Types.Mixed,//接受所有类型
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
let studentmodle=mongoose.model('students',studentsc);


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


       //开启数据库
       (async ()=>{
        await linkmongo()

        //x向数据中加入数据  __v高并发有用
        await studentmodle.create({
            stu_id:'2',
            name:'xh',
            age:"11",
            sex:"女",
            hobby:['男'],
            info:223456,
        },(err,data)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log('数据插入成功',data);
            }
        });

        //


        //操作数据库

    })();


    
       