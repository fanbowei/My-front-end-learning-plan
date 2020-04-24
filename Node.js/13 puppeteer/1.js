const pupperteer =require('puppeteer')
// console.log(pupperteer);

//配置网页大小
let options={
    defaultViewport:{width:1080,height:1920},
    headless:false//可选配置项设置有无界面游览器
}
async function test(){
    //创建游览器实例
    let browser=await pupperteer.launch(options)
    
    
    //打开一个界面
    const page=await browser.newPage();
    

    //访问网站
    // await page.goto('http://baidu.com');
    await page.goto('https://www.dytt8.net/');
    //截屏
    await page.screenshot({path:'screenshot.png'})

    //获取页面的内容(输出在页面的控制台)
    let ele=await page.$$eval('#menu li a',(e)=>{
        var arr=[]
        e.forEach((item,index)=>{
            // console.log(item.innerText)
            var obj={
                href:item.getAttribute('href'),
                text:item.innerText
            }//创建对象存放地址
            arr.push(obj)
        })
        return arr
    })
    // console.log(ele)

    //打开网站
    let gnpage=await browser.newPage();
    await gnpage.goto(ele[2].href)


    // //监听控制台
    // page.on('console',(e)=>{
    //     console.log(e)
    // })
   


}

test()