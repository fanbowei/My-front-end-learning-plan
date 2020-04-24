<?php

//print_r($_FILES);


//获取对应文件对应的对象
$fileinfo=$_FILES['upfile'];
//获取上传文件的名称
$filename=$fileinfo['name'];
//获取上传文件的路径
$filepath=$fileinfo['tmp_name'];

move_uploaded_file($filepath,'../savefile/'.$filename);
?>