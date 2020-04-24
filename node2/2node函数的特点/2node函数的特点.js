/*
1node中任何模块(文件)都被一个外层函数包裹
argument.callee代表函数本身
*/
//function (exports, require, module, __filename, __dirname)
console.log(arguments.callee.toString())//查看包裹函数

//__filename:文件名字,输出当前文件所在的路径
//__dirname:文件夹名字,输出当前文件所在文件夹的路径

//外层函数的作用
//1隐藏内部实现 2支持commonjs的模块化