const fs=require('fs')

let rs=fs.createReadStream(__dirname+'/hello.txt',{
    //start:,//读取的起始点
    //end 读取的终点
    // highWatarMark 每次读取数据的大小 默认 64*1024
})

//当给可读流绑定一个data事件,会自动触发读取流事件
rs.on('data',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('可读流打开了');
        console.log(data);//data.length输出的是占用内存的大小
    }
})

rs.on('close',function () {
    console.log("可读流关闭");
  }) 
  