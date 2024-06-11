<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configura el correo electrónico
    $destinatario = "ivanlugo97@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $asunto = "Nuevo mensaje de contacto desde el sitio web";
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        echo "Gracias por contactarnos. Tu mensaje ha sido enviado con éxito.";
    } else {
        echo "Lo sentimos, ha ocurrido un error al enviar el mensaje.";
    }
} else {
    // Si se intenta acceder directamente a contacto.php, redirige al formulario
    header("Location: formulario.html");
}
?>
