let path=require('path');

let strpath='https://www.bilibili.com/video/av88369894?p=8.htm'
//获取路径信息的扩展名
let a=path.extname(strpath)
console.log(a)

//自动拼接字符串转换成路径
let info=path.resolve(...['/sxt','qianduan','zhongji'])
console.log(info)

//path.join(_dirname,path)
//_dirname:获取当前执行文件所在的目录的完整目录名
//_filename:获取当前执行文件的带有完整绝对路径的文件名
// process.cwd()获取当前执行node明日是否的文件夹目录名
let info2=path.join(__dirname,'/sxt','qianduan','zhongji')
console.log(info2)

//可以解析路径
console.log(path.parse(__filename))
