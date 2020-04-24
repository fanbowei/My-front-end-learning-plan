const mydbtools=require('./dbtools.js')

mydbtools.linkmongodb('test');

let schema= mydbtools.creatscheam({
    stu_id:{
        type:String,
        require:true,
        unique:true,
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
    hobby:[String],
    info:{
        type:mydbtools.mongoose.Schema.Types.Mixed,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:'Y'
    }
})

 let dbobj=mydbtools.creatmoduledb('stud',schema)



    
