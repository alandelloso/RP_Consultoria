<?php
$destino = "rrhh@rpconsultoria.com.ar";
$asunto = $_POST['title'];
$nombre = $_POST['first_name'];
$apellido = $_POST['last_name'];
$email = $_POST['mail'];
$remuneracion = $_POST['remuneracion'];
$adjunto = $_FILES['cv'];
$contenido = "Nombre: $nombre $apellido
Remuneracion Pretendida: $ $remuneracion
Mail: $email";

require "phpmailer/class.phpmailer.php";

$mail = new PHPMailer;
$mail->From = $email;
$mail->FromName = "RP Website";
$mail->Subject = $asunto;
$mail->addAddress ($destino, 'RP Consultoria');
$mail->Body = $contenido;
$mail->AddAttachment($adjunto['tmp_name'], $adjunto['name']);
$mail->CharSet = 'UTF-8';

if ($nombre == "" or $apellido == "" or $email == "" or $adjunto['name'] == "") {
	header('Location: ../fail');
} elseif ($mail->Send()) {
	header('Location: ../success-busquedas'); 
} else {
	header('Location: ../fail');
}
?>