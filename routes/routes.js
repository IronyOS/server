const { Router } = require('express');
const router = Router();
const nodemailer = require("nodemailer");



router.post('/post',(req,res)=>{
    const {nombre, email, telefono} = req.body;

    contentHTML = `
    <h1>Contacto Sherpaths</h1>
    <ul>
        <li>Username: ${nombre}</li>
        <li>Email: ${email}</li>
        <li>Telefono: ${telefono}</li>
    </ul>
    `;

    res.send(contentHTML);

  


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
                html: contentHTML
            })

            return
        }

    sendMail();


    
})

module.exports = router