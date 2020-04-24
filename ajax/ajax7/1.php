<?php
$name=array(
    '女装'=>array('pirce'=>'111','img'=>'未标题-1.jpg'),
    '包包'=>array('pirce'=>'222','img'=>'未标题-1.jpg'),
    '拖鞋'=>array('pirce'=>'333','img'=>'未标题-1.jpg'),
);
echo $name[$_GET['name']]['pirce'];
echo ' ';
echo $name[$_GET['name']]['img'];
?>