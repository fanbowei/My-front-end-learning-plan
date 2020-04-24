const mysql=require('mysql')

//创建mysql配置对象
let options={
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: 'fbw524',
    database: 'my',
    multipleStatements:true,
}
//创建链接mysql
let connection=mysql.createConnection(options);

//建立链接
connection.connect((err)=>{
    if(err)
    {   
        console.log(err)
        console.log('数据库连接失败')
    }
    else
    {
        console.log('数据库连接成功')
    }
})
//执行查询语句
// let strSqlselect='select * from student'
// connection.query(strSqlselect,(err,data,fields)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {   
//         console.log('查询成功')
//         console.log(data)
//         console.log(fields)
//     }
// })

//删除表
// let strSqldelet='drop table student'
// connection.query(strSqldelet,(err,results)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('删除成功')
//         console.log(results)
//     }

// })

//删除库
// connection.query('drop database my',(err,results)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('删除成功')
//         console.log(results)
//     }
// })

//创建库
// let strSql4='create database my'
// connection.query(strSql4,(err,r)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('创建成功')
//         console.log(r)

//     }
// })

//创建表
// let strsql5="CREATE TABLE `student11` (`name` char(20) NOT NULL ,`age` char(20) NULL ,`sex` char(20) NULL ,PRIMARY KEY (`name`));"
// connection.query(strsql5,(err,r)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('创建表成功')
//         console.log(r)
//     }
// })

//插入数据
// let strSql6='insert into student11 (name,age,sex) values("xm","11","nan")'
// connection.query(strSql6,(err,r)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('插入成功')
//         console.log(r)
//     }
// })


//插入
// let strSql6='insert into student11 (name,age,sex) values(?,?,?)'
// connection.query(strSql6,['xh','11','nv'],(err,r)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('插入成功')
//         console.log(r)
//     }
// })

