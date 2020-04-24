let fs=require('fs');



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
// fsread('hello.txt').then(function (succdata) {console.log(succdata)  },function (errodata) { console.log(errodata) })

async function readfl(){
    let file1=await fsread('hello.txt');
    let file2=await fsread(file1+'.txt');
    console.log(file2)

}

readfl();
 console.log('123')