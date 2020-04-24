let readline=require('readline')

let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// rl.question('你的名字是',function (answer) {
//     console.log('我的名字是',answer)
//     rl.close()
//   })

//   rl.on('close',function(){
//       process.exit(0)
//   })

let ansster=[];
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

 async function que() {
     await question('你的名字是');
     await question('你今年多大');
     await question('你的性别是');
     let last=await question('你的组织是');
     await last.close()
     
    
   }
   que()
  