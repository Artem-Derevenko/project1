<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$msg = trim($_POST['msg']);

if (!get_magic_quotes_gpc())
{
$name = addslashes($name);
}

$name = htmlspecialchars($name);

$log =="";
$error="no";
if ($error=="no") 
{
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: noreply@kursmassage.ru/\r\n";

mail("schlesser84@gmail.com", "Cообщение от пользователя", <<<HTML
<div>Получено новое сообщение:</div>
<div>Имя: {$name}</div>
<div>E-mail: {$email}</div>
<div>Сообщение: {$msg}</div>
HTML
, $headers);

/*header("Location: http://".$_SERVER['HTTP_HOST']."/rent/sucess.html");
exit;*/
}
else
{
$log = "<p><strong>Ошибка</strong></p><ul style='padding-left:0;list-style:none'>".$log."</ul>";
echo $log;
}
?>