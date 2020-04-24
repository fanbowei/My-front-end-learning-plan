const fs=require('fs')
let ws=fs.createWriteStream(__dirname+'/text2.txt',{
    flags:'a',
    encoding:'utf8',
    autoClose:true,//文件写入完成自动关闭文件(不是关闭流)
    start:0,//文件写入的起始位置
})

ws.write('马上就放学了可以吃饭了\n',(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('写入成功')
    }
});
ws.write('马上就放学了可以吃饭了\n',(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('写入成功')
    }
});
ws.write('马上就放学了可以吃饭了\n',(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('写入成功')
    }
});
ws.write('马上就放学了可以吃饭了\n',(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('写入成功')
    }
});

ws.close();//(如果是八版本和以前容易造成数据丢失 用ws.end())
ws.on('open',function () {
    console.log('可写流打开了');
  })

ws.on('close',function () {
    console.log('可写流关闭');
  })

  //node中错误优先,一般回调函数的第一个参数都是错误对象