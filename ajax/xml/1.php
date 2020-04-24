<?php

header('content-type:text/html; charset=utf-8');
header('content-type:text/xml; charset=utf-8');
echo  file_get_contents('info.xml');

?>