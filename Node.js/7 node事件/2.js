//引入事件模块
let events=require('events');
let fs=require('fs');
//创建事件对象
let ee=new events.EventEmitter()

ee.on('hello',function(msg){
    console.log('事件执行成功1')
    // console.log(msg)
});
ee.on('hello',function(msg){
    console.log('事件执行成功2')
});

let rs=fs.createReadStream('1.js')
// rs.on('open',function(){
//     console.log('文件已经打开')
// })

rs.on('data',function(d){
    ee.emit('hello')
})
// rs.on('close',function(){
//     ee.emit('hello')
// })