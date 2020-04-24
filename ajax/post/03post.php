<?php

echo $_POST["username"];
//如果是post请求,会将提交的数据放到请求头中


//get会将数据储在urld的后面  post会见数据保存在请求头中
//get请求对数据大小有要求 post请求对数据没有要求
//get请求用于提交非敏感数据和小数据
//post请求用于提交大数据和敏感数据

?>