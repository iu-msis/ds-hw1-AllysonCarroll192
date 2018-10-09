<?php
$comment = new Comments($_POST);

$comment->create();
echo json_encode($comment);
