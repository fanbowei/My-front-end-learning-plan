
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true})) //获取post请求的请求体
app.use(express.static(__dirname+'/public/'))
// app.use(express.static(__dirname+'/js/'))
app.use(express.static(__dirname))



app.get('/test_get', (req, res) => {
    
    res.send('我是jquery返回的get请求')
})
app.post('/test_post', (req, res) => {

    res.send('我是jquery返回的post请求')
})

app.get('/get_code', (req, res) => {
    console.log('收到了请求');
    let code=Math.floor(Math.random()*8999+1000)
    setTimeout(() => {
        res.send(code.toString())
    }, 2000);
})


app.listen(port, () => console.log(`服务器启动:http://127.0.0.1:3000/1.html`))