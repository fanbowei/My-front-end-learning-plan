let fs=require('fs');
let tools=require('./tools.js')

async function fun(url,ii) {
    

    let bool=await tools.fsstat(url+'\/')
     if(bool.isDirectory())
    {
        let dir=await tools.fsreaddir(url+'\/')
        for(let i=0;i<dir.length;i++)
        {              
            for(let t=0;t<ii;t++)
            {
                await tools.fswrite('dir.txt','\t')
            }
            await tools.fswrite('dir.txt',dir[i]+'\n')
            let url1=url+'\/'+dir[i];   
            let bool=await tools.fsstat(url1)          
            if(bool.isDirectory())
            {
               await fun(url1,ii+1);
            }
           
        }
    }

  }
  fun('../',1)