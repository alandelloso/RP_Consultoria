<?php
$destino = "rrhh@rpconsultoria.com.ar";
$asunto = "Postulacion Voluntaria";
$nombre = $_POST['first_name'];
$apellido = $_POST['last_name'];
$categoria = $_POST['categoria'];
$email = $_POST['mail'];
$adjunto = $_FILES['cv'];
$contenido = "Profesión: $categoria
Nombre: $nombre $apellido
Mail: $email";

require "../libs/phpmailer/class.phpmailer.php";

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