const fs=require('fs');
fs.writeFile(__dirname+'/hello.txt','helloword你好\n',{
    flag:'a',//打开文件进行的操作 'w'直接写入 a追加
    encoding:'utf-8',
    mode:0o666//文件权限的默认值0o111:文件可被执行 0o222:文件可被写入 0o444:文件可被读取
                //666=222+444 777=11+222+444
},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('文件写入成功')
    }
})

//简单文件写入是一次性把要写入的数据加载到内存中,对象比较大的文件容易产生内存移除,适用于小文件写入