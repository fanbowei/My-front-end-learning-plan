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
   
    //获取页面对象
    elementHandles=await page.$$('#menu li a');
    await elementHandles[2].click()
    //去掉广告
    await page.$eval('body #cs_ap_8040',(e)=>{
        e.href='#'
    })
    await page.$eval('#cs_kd_div #cs_kd_form',(e)=>{
        e.action="#"
    })
    
    //通过表单输入进行搜索
    inputbtn=await page.$('.searchl .formhue');
    //让输入框聚焦
    await inputbtn.focus()
    //输入框输入内容
    await page.keyboard.type('蝙蝠侠')
    //点击搜索按钮
    let btn=await page.$('.search input[type="Submit"]')
    await btn.click();

    

  
   


}

test()