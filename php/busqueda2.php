<?php
$destino = "rrhh@rpconsultoria.com.ar";
$asunto = "Tecnico de Campo (Salta)";
$nombre = $_POST['first_name'];
$apellido = $_POST['last_name'];
$email = $_POST['mail'];
$adjunto = $_FILES['cv'];
$contenido = "Nombre: $nombre $apellido
Mail: $email";

require "phpmailer/class.phpmailer.php";

$mail = new PHPMailer;
$mail->From = "busquedas@rpconsultoria.com.ar";
$mail->FromName = "RP Website";
$mail->Subject = $asunto;
$mail->addAddress ($destino, 'RP Consultoria');
$mail->Body = $contenido;
$mail->AddAttachment($adjunto['tmp_name'], $adjunto['name']);

if ($nombre == "" or $apellido == "" or $email == "" or $adjunto['name'] == "") {
	header('Location:../fail.html');
} elseif ($mail->Send()) {
	header('Location:../success-busquedas.html'); 
} else {
	header('Location:../fail.html');
}
?>