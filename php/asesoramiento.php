<?php
$destino = "adelloso@rpconsultoria.com.ar";
$asunto = "Consulta: Asesoramiento";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['mail'];
$mensaje = $_POST['comment'];
$contenido = "Nombre: $nombre $apellido
Mail: $email
Mensaje: $mensaje
(**Enviado desde RP Consultoría**)";

require "phpmailer/class.phpmailer.php";

$mail = new PHPMailer;
$mail->From = $email;
$mail->FromName = 'RP Website';
$mail->Subject = $asunto;
$mail->addAddress ($destino, 'RP Consultoria');
$mail->Body = $contenido;
$mail->CharSet = 'UTF-8';


if ($nombre == "" or $apellido == "" or $email == "" or $mensaje == "") {
	header('Location: ../fail');
} elseif ($mail->Send()) {
	header('Location: ../success'); 
} else {
	header('Location: ../fail');
}
?>