<?php
require '../..app/common.php';
if($_SERVER['REQUEST_METHOD']=='POST') {
  require 'commentPost.php';
  exit;
}

$commentArr = [];
$commentArr = Comment::fetchALL();

$json = json_encode($commentARR, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
