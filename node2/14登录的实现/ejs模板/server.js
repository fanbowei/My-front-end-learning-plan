const express = require('express')
const app = express()
const port = 3000

//配置模板引擎
app.set('view engine','ejs')
//设置模板所在的目录
app.set('views',__dirname+'/views')


let data=[{name:'keb',age:17},{name:'kwwb',age:19},{name:'kebb',age:27}]
app.get('/', (req, res) => res.send(
    res.render('demo',{data:data})
))




app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))