const express = require('express')
const app = express()
const port = 3000


app.get('/', (req,res)=>{
    req.query
    res.set('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    res.send('qwerasdfzxcv')

})



app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))