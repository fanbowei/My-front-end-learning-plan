let str='helloworld'
// let buf=Buffer(str)
// console.log(buf)
// console.log(buf.toString())
let buf=Buffer.alloc(10)
console.log(buf)

let buf2=Buffer.allocUnsafe(10) //不安全 不会清除开辟空间的原来内容值
console.log(buf2)