let fs=require('fs')//导入文件模块
//node,读写文件也有同步和异步的接口


//同步的方式
let fr=fs.openSync('./hello.txt','r')//第二个为标识符 
//函数返回值是一个在内存中的标识
console.log(fr)


//buffer缓存器,相当于在内存中开辟一个数组
let buffer=Buffer.alloc(20)

let hellocontent=fs.readFileSync('./hello.txt',{flag:'r',encoding:'utf-8'})
console.log(hellocontent.toString())