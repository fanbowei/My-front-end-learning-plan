let a=10;
var b=11;
exports.a=a;
module.exports.b=b;//系统默认设置了exports=module.exports 
//注意 使用exports只能设置单个的属性 //如果使用exports传递值就会改变系统预设的指针,所以不能使用exports传递对象(地址)
//module.exports可以传递地址,系统默认使用module.exports

console.log('123')
console.log('123')