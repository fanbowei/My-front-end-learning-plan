//写入流
let fs=require('fs');

//创建一个写入流fs.createWriteStream(path,[可选配置])
let ws=fs.createWriteStream('hello.txt',{flag:'w',encoding:'utf-8'})

//监听文件事件
ws.on('open',function () {
    console.log('文件打开')
  })

ws.on('ready',function () {
    console.log('文件写入准备')
  })

ws.on('close',function () {
    console.log('文件关闭')
  })

  //文件写入可以多个
ws.write('helloworld1\n',function (err) {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('文件写入完成1')
    }
  })


  ws.write('helloworld2\n',function (err) {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('文件写入完成2')
    }
  })

  //文件写入完成
  ws.end(function () {
      console.log('文件写入关闭')
    })