const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Configuración del transportador de nodemailer con un servicio SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ejemplo con Gmail; ajusta según tu proveedor de correo
  auth: {
    user: 'rubencorsario5@gmail', // Tu dirección de correo
    pass: 'Martinez1+15022004'       // Tu contraseña de aplicación (recomendado) o de correo
  }
});

// Ruta para recibir datos del formulario y enviar correo
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body; // Datos recibidos del cliente Angular

  const mailOptions = {
    from: 'rubencorsario5@gmail.com', // De quien
    to: to,                     // Para quien
    subject: subject,           // Asunto del correo
    text: text                  // Cuerpo del mensaje
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});