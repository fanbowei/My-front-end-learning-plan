let axios =require('axios')
let fs=require('fs')
let tools=require('./tools.js')
let httpurl='https://www.1905.com/vod/list/n_1_t_1/o3p1.html'
// axios.get(httpurl).then(e=>{
//     console.log(e)
// })



//获取起始页面的所有分类
async function getflurl() { 
    let rep=await axios.get(httpurl)
    let reg=/<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs;
    let result=reg.exec(rep.data);
    // console.log(result[1])
    //获取分类里的电影链接
    let reg2=/<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" >(.*?)<\/a>/igs
    let result2
    var arrclass=[]
    while(result2=reg2.exec(result[1]))
    {
        if(result2[2]!='全部'){
            let obj={
                classname:result2[2],
                url:result2[1]
            }
            arrclass.push(obj);
           
            
            getmore(encodeURI(result2[1]))
        }
    }
//   console.log(arrclass)

   
  
 }


//定义一个函数请求所有的页面
async function getmore(url) { 
    let rep=await axios(url)
    let reg=/<a class="pic-pack-outer" target="_blank" href="(.*?)".*?<img/igs
    var res;
    var arrlist=[]
    while(res=reg.exec(rep.data)){
        arrlist.push(res[1])
        getpageless(encodeURI(res[1]))
    }
    // console.log(arrlist)
 }

//根据链接获取电影的详细信息
 //解析页面
 async function getpageless(url) {
    let req=await axios.get(url);
    let reg=/<h1 class="playerBox-info-name playerBox-info-cnName">(.*?)<\/h1>.*?<span id="playerBoxIntroCon">(.*?)<a href/igs
    let res=reg.exec(req.data)
    // console.log(url)
    let movie={
        name:res[1],
        brief:res[2],
        movieurl:url
    }
    await fs.writeFile('./movie/'+res[1]+'.txt',movie.brief+'\n'+movie.movieurl+'\n',{flag:'a'},function(){

    })


}
tools.fsdir(__dirname+'/movie')
getflurl();


