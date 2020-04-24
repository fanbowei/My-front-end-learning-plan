const puppeteer=require('puppeteer');
let axios=require('axios');
let tools=require('../tools')


let httpurl="https://sobooks.cc/"
let options={
    defaultViewport:{width:1080,height:1920},
    headless:false,
    
}
async function test(){
    let browser=await puppeteer.launch(options)
    

    async function getpage(){
        let page=await browser.newPage();
        await page.goto(httpurl)
        page.$eval('.pageination li span:last-child',(e)=>{
            let length=e.innerHTML.length
            length=e.innerHTML.substring(1,length-2).trim()
            return length
        })


    }
    let pagenum=await getpage()
    console.log(pagenum)
}
test();
//进入网站,获取整个网站列表

//进入网站,获取整个网站列表的页数



//获取列表的所有链接
//进入每个电子书的详情页面获取电子书的网盘地址
