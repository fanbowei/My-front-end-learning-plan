const cheerio=require('cheerio')
let fs=require('fs')
let tools=require('./tools.js')
const axios=require('axios')
const URL=require('url')
//获取html文档的内容

let httpurl='http://www.doutula.com/article/list'

tools.fsdir(__dirname+'/pic')
axios.get(httpurl).then(res=>{
    //cheerio解析html文档
    let $=cheerio.load(res.data)
    //获取当前页面表情的链接
    $('#home .col-sm-9>a').each((i,ele)=>{
        pauses(100)
        console.log('pppppppppp')
        let ree=$(ele).attr('href');
        let title=$(ele).find('.random_title').text()
        // console.log(ree)
        // console.log(title)
        tools.fsdir('./pic/'+title)
        download(encodeURI(ree),title)
        
    })
})

async function download(url,title){  
    let ress=await axios.get(encodeURI(url))
    // console.log(ress.data)
    let $=cheerio.load(ress.data)
    $('.artile_des a img').each((i,ele)=>{
        pauses(100)
        let ree=$(ele).attr('src')
        let arr=URL.parse(ree).path.toString()
        arr=arr.split('.')[1]
        console.log(arr)
        let ws=fs.createWriteStream('./pic/'+title+'/'+i+"-."+arr)
        axios.get(encodeURI(ree),{
            
            responseType:'stream'
        }).then(e=>{
            console.log('###########################');
            e.data.pipe(ws);
            e.data.on('close',function () {
                ws.close();
              })
         })
         
         
     })
}








function pauses(ms) {
    for(let t = Date.now();Date.now() - t <= ms;)
    ;
}






// axios.get('http://www.doutula.com/article/detail/4153753').then(e=>{
//     console.log(e)
// })





// let ws=fs.createWriteStream('./1.jpg')
// axios.get('http://tva2.sinaimg.cn/large/9150e4e5gy1gct8v4h07hj20dz095wgm.jpg',{
//             responseType:'stream'
//         }).then(e=>{
//             e.data.pipe(ws);
//         })