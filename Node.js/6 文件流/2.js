let fs=require('fs')

//创建读取流
// let rs=fs.createReadStream('hello.txt',{flags:'r',encoding:'utf-8'})

// rs.on('open',function(){
//     console.log('文件已经打开')
// })

// rs.on('close',function(){
//     console.log('文件关闭')
// })

// //每一次数据流入完成
// rs.on('data',function(d){
//     console.log(d)
// })





let rs=fs.createReadStream('xiaoban.mp4',{flags:'r'})
let ws=fs.createWriteStream('xiaoban1.mp4',{flags:'w'})
rs.on('open',function(){
    console.log('文件已经打开')
})

rs.on('close',function(){
    console.log('文件关闭')
    //同时关闭写入
    ws.end();
})

//每一次数据流入完成
rs.on('data',function(d){
    console.log();
    console.log(d);
    ws.write(d,()=>{
        console.log('单批写入成功')
    });
})