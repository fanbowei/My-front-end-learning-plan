function ajax(url,suc,err) {

    var xmlhttp=new XMLHttpRequest();

    xmlhttp.open('GET',url+'?'+new Date(),true)

    xmlhttp.send();

    xmlhttp.onreadystatechange=function (e) {

        if(xmlhttp.readyState===4)
        {
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
}