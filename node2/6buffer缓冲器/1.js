/*
1buffer是什么
buffer是一个类似数组的对象,用于存储数据(存储的是二进制的数据)
buffer的效率很高,读取和存储很快,直接对计算机的内存进行操作
buffer的大小一旦确定了不可修改
每个元素占用内存大小为1字节
buffer是node中非常核心的模块
*/

//将一个字符串存入buffer
// let buf=Buffer.from('hello world')
// console.log(buf)//二进制数据以十六进制保存
// console.log(buf.toString())

//alloc创建buffer实例效率不高,清空了数据
let buf2=Buffer.alloc(10)
console.log(buf2)

//这种方法不安全,没有清空数据(我内存大,一般看不见)
let buf3=Buffer.allocUnsafe(10)
console.log(buf3)