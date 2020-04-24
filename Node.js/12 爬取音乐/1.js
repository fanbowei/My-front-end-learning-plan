//下载音乐 获取音乐相关信息,通过信息获取mp3地址
const axios=require('axios');
const fs=require('fs')

fs.mkdir('mp3',function () {  });
async function getpage(num){
    let httpurl='http://www.app-echo.com/api/recommend/sound-day?page='+num
    let res=await axios.get(httpurl)
    res.data.list.forEach((item,i) => {
        let title=item.sound.name
        let mp3url=item.sound.source
        download(title,mp3url,i)
    });

}

async function download(title,mp3url,i){
    let res=await axios.get(mp3url,{responseType:'stream'});
    await fs.writeFile('./mp3/musicname.txt',i+'-----'+title+'\n',{flag:'a'},function(){})
    let ws=await fs.createWriteStream('./mp3/'+i+'.mp3')
    res.data.pipe(ws)
    res.data.on('close',function(){
        ws.close();
    })

}
getpage(1)