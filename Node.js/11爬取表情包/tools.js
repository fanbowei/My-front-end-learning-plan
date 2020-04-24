let fs=require('fs')

function fsread(url){
    return new Promise((succ,erro)=>{
        let fd=fs.readFile(url,{flag:'r',encoding:'utf-8'},function (err,data) { 
            if(err)
            {
                //失败执行的内容
                erro(err);
            }
            else{
                // 成功执行的内容
                succ(data);
            }
         })
    })
}


 //封装写入模块
 function fswrite(url,str) {
    return new Promise(function(succ,erro){
      fs.writeFile(url,str,{flag:'a',encoding:'utf-8'},function (er) {
          if(er)
          {
              console.log('写入失败');
              erro(er);
             
          }
          else
          {   console.log('写入内容成功')
              succ('写入内容成功');
          }
        })
    })
  }
  //读取文件目录
  function fsreaddir(url) { 
    return new Promise((succ,erro)=>{
        fs.readdir(url,function(err,files){
                if(err)
                {   
                    erro(err)
                }
                else
                {
                    succ(files)
                }
            })
    })
 }


 //返回文件类型
 function fsstat(url) {
     return new Promise((succ,erro)=>{
         fs.stat(url,function (err,stats) {
             if(err)
             {
                 console.log('读取错误')
                 erro();
             }
             else
             {
                 succ(stats);
             }
           })
     })
   }
   //封装输入模块
   function question(questr) { 
    return new Promise((succ,erro)=>{
        rl.question(questr,function (answer) {
            ansster.push(answer);
            succ(rl)
          })
          rl.on('close',function () {
              process.exit(0)
          })
       
    })
 }

//封装创建目录
function fsdir(path){
    return new Promise((succ,erro)=>{
        fs.mkdir(path,function(err){
            if(err)
            {
                erro(err);
            }
            else
            {
                succ();
            }
        })
    })
}




  module.exports={
    fsread,
    fswrite,
    fsreaddir,
    fsstat,
    question,
    fsdir
}