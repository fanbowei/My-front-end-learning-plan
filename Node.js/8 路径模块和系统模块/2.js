//os.cpus可以获取cpu信息
let path=require('path');
let os=require('os');
// console.log(os)
console.log(os.cpus())

//获取内存
console.log(os.totalmem())

//返回当前cpu架构
console.log(os.arch())

//查看剩余内存
console.log(os.freemem())

//查看系统平台
console.log(os.platform())