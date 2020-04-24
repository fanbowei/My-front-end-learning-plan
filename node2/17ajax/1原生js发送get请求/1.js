// const url=require('url')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname+'/public/'))


app.get('/test_get', (req, res) => {
    let obj=req.query
    res.send(obj)
})
app.post('/test_post', (req, res) => {
    res.send('我是服务器返回的post请求')
})


app.listen(port, () => console.log(`服务器启动:http://127.0.0.1:3000/1.html`))