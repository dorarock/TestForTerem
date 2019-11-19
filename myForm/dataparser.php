<?php

$data = json_decode($_GET['jsonData']);

foreach ($data as $key=>$value) {
    $response .= '  Параметр: '.$key.';  '.'Значение: '.$value.';'.'<br>';
}
echo $response;
?>