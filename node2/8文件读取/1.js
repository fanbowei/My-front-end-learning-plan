let fs=require('fs')


//简单文件的读取
fs.readFile(__dirname+'/hello.txt',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
        console.log(data.toString())//buffer自带的tostring转换16进制字符
        fs.writeFile('./hell1.txt',data,function () {  })
    }
})