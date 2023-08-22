<?php
$_POST = json_decode(file_get_contents("php://input"), true);
if(empty($_POST['name']) ||
  empty($_POST['email'])) {
    echo "No arguments Provided!";
    return false;
 } else {
  $message = 'Name: ' . $_POST['name'] . ' ';
  $message .= 'Email: ' . $_POST['email'] . ' ';
  if(!empty($_POST['request'])) {
      $message .= 'Request: ' . $_POST['request'] . ' ';
  }
  $mailTo = "mail@mail.com"; 
  $subject = "Table reservation"; 
  $headers= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: Tzeezotje <еzeezotje@site.com>\r\n";

  $res = mail($mailTo, $subject, $message, $headers);
  return $res;
}