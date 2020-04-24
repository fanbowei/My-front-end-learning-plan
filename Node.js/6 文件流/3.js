//管道流
//管道提供了一个输出流到输入流的机制,通常我们从一个流中获取数据

let fs=require('fs');
rs=fs.createReadStream('hello.txt');
ws=fs.createWriteStream('hello2.txt');
rs.pipe(ws)

console.log('------')