import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: '',
  port: '',
  secure: true,
  auth: {
    user: '',
    pass: ''
  }
})

app.post('/submit-form', async (req, res) => {
  const formData = req.body;
  console.log('Datos del formulario recibidos:', formData);


  const mailOptions = {
    from: formData.email,
    to: 'agustin.ramirez@caxer.com.ar',
    subject: 'Nuevo formulario enviado',
    text: `Nombre: ${formData.nombre}\nApellido: ${formData.apellido}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`,
  };

  try {

    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito');
    res.status(200).send('Formulario enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).send('Error al enviar el formulario');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
})