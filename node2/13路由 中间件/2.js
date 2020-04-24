//中间件
/*
    express是一个自身功能极简,完全是由路由和中间件构成的一个web开发框架;从本质来所,一个express应用就是在调用各种中间件
    中间件是一个函数,它可以访问请求对象,响应对象和web应用中处于响应循环流程中的中间件,一般被命名为next的变量


*/


/*
中间件 :本质上就是一个函数,包含三个参数 request response next

作用:
执行任何代码
修改请求和响应对象
终结请求-响应循环
调用堆栈中的下一个中间件


分类:
应用(全局)级中间件(过滤非法请求,例如防盗链)
    第一种写法  app.use((req,res)=>{})
    第二种写法  使用函数定义

第三方中间件(通过npm下载 例如body-parser)
    app.use(bodyParser.urlencoded({extend:true}))


内置中间件(express内部封装好的中间件)
    app.use(express.urlencoded({extended:true}))

路由器中间件
*/

const bodyParser=require('body-parser')
const express = require('express')
const app = express()
const port = 3000

//第三方中间件
//使用中间件解析post请求发过来的请求体并挂在到requset上面
app.use(bodyParser.urlencoded({extended:true}))


//内置的中间件
app.use(express,urlencoded({extended:true}))

//内置中间件 暴露静态资源
app.use(express.static("./"))


//全局中间件第一种写法
app.use((req,res,next)=>{
    next()//中间件会第一时间处理请求,只有当调用了next函数才会去匹配路由
})

//第二种写法
function mymiddleware(req,res,next){
    next()
}

// 写在路由的中间
app.get('/', mymiddleware,(req, res) => res.send('Hello index'))
app.listen(port, () => console.log(`服务器启动,Server running at  http://127.0.0.1:${port}`))

