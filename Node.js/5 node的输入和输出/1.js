//读取目录
//fs.readdir(path,callback)

let fs=require('fs');
let tools=require('./tools.js')
// fs.readdir('../../',function(err,files){
//     if(err)
//     {   
//         console.log(err)
//     }
//     else
//     {
//         console.log(files)
//     }
// })



//修改某个文件目录下的内容
async function dosomething() {
    let dir=await tools.fsreaddir('./');
    dir.forEach(async function(name,i){
        let content=await tools.fsread(name)
        await tools.fswrite('dir.txt',name+'\n')
        await tools.fswrite('dir.txt',content)
    })
  }
  dosomething()


