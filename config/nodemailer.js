const nodemailer = require("nodemailer");


const createTrans = () =>{
var transport = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
      user: "felix.felix.felix.000@gmail.com",
      pass: "44534F646BA0DC0892304B55F996CCC4902F"
    }
  });
  return transport;
};

const sendMail = async () => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"felix rodriguez" <felix.felix.felix.000@gmail.com',
        to: 'felix.rb@Outlook.es',
        subject: "prueba ojala funcione",
        html: "<p>Hola</p>"
    })

    return
}

exports.sendMail = () => sendMail();