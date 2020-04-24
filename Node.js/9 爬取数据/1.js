//url.parse()可以解析一个url地址,通过传入第二个参数(true)把包含有查询字符串
//的query转换成对象

let url=require('url');
console.log(url.parse(`https://www.bilibili.com/video/av88369894?.jpg`))

let url1='http://www.taobao.com'
let url2='../sxt/qianduan/1.html'

let newurl=url.resolve(url1,url2)
let arr=url.parse(newurl).path.toString()
