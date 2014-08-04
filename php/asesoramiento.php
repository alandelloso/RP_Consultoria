<?php
$destino = "adelloso@rpconsultoria.com.ar";
$asunto = "Consulta: Asesoramiento";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['mail'];
$mensaje = $_POST['comment'];
$contenido = "
Nombre Completo: $nombre $apellido 
E-mail: $email
Consulta: 
$mensaje";
if ($nombre == "" or $apellido == "" or $email == "" or $mensaje == "") {
	header('Location: ../fail');
} else {
mail($destino, $asunto, $contenido);
header('Location: ../success'); 
}
?>