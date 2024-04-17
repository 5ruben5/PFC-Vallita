<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST['name'];
    $telefono = $_POST['telefono'];
    $lugar = $_POST['seleccion'];
    $num_adultos = $_POST['num_adultos'];
    $num_ninos = $_POST['num_ninos'];
    $fecha_reserva = $_POST['fecha_reserva'];
    $hora = $_POST['time'];
    
    // Construir el mensaje de correo electrónico
    $mensaje = "Nuevo pedido de reserva:\n";
    $mensaje .= "Nombre: $nombre\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Lugar de reserva: $lugar\n";
    $mensaje .= "Número de adultos: $num_adultos\n";
    $mensaje .= "Número de niños: $num_ninos\n";
    $mensaje .= "Día de reserva: $fecha_reserva\n";
    $mensaje .= "Hora de reserva: $hora\n";
    
    // Destinatario del correo electrónico
    $destinatario = "rubencorsario5@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    
    // Asunto del correo electrónico
    $asunto = "Nuevo pedido de reserva";
    
    // Enviar el correo electrónico
    mail($destinatario, $asunto, $mensaje);
    
    // Redireccionar a una página de éxito o mostrar un mensaje de éxito
    header('Location: contacto.component.html');
    exit();
}
?>
