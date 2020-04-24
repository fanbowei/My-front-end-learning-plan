//创建objtostr函数
function objtostr(obj) {
    var res=[];
    for(var key in obj)
    {
        //将obj加入数组
        res.push(key+"="+obj[key]);
    }
    return res.join("&");
}





//var reencodeURIComponent("wd=val")

function ajax(url,obj,timeout,suc,err) {
//传递一个对象,来封装get请求的参数,js处理成url的形式
    var xmlhttp=new XMLHttpRequest();
    var timer
    //将对象转换成字符串
    var str=objtostr(obj);
    xmlhttp.open('GET',encodeURI(url+'?'+str+'&'+new Date()),true)

    xmlhttp.send();

    xmlhttp.onreadystatechange=function (e) {

        if(xmlhttp.readyState===4)
        {
            clearInterval(timer)
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304)
            {
                suc(xmlhttp);

            }
            else
            {
                err(xmlhttp);
            }
        }
    }
    if(timeout)
    {
        timer=setInterval(function () {

            xmlhttp.abort();
            alert('超时了')
            clearInterval(timer)
        },timeout)
    }
}