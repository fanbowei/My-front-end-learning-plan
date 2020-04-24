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
        await writefl('C:/Users/yure/Desktop','hello.txt')

      }
      writetxt();