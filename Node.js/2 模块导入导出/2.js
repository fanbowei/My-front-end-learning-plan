let a=require('./1')//在没有任何对象导出的情况下会得到一个空对象
let b=require('./1')//一个模块的js代码只会在第一次调用会执行
let $=require('jquery')
console.log(a)
console.log($)
