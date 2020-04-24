let fs=require('fs');
// fs.writeFile('./hello.txt','helloworld',{flag:'a',encoding:'utf-8'},function (erro) {
//     if(erro)
//     {
//         console.log('写入内容出错');
//     }
//     else
//     {
//         console.log('写入内容成功')
//     }
//   })


  //封装写入模块
  function writefl(url,str) {
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

    async function writetxt() {
        await writefl("./hello.txt","helloworld\n");//换行\n 制表\t
        for(let i=1;i<10;i++)
        {
            await writefl("./hello.txt","helloworld"+i+"\n");
        }

        await writefl('./hello.html','<h1 style="color:red">你好<h1>')


      }
      writetxt();
  