//const model= require('./../models/contact.models');
const mailer = require('../utils/mailer');

const sendComment = async(req, res, next) =>{
    try {
        const { name, surname, email, comment } = req.body;
        const emailToSend = { name, surname, email, comment };
        
        const info = await mailer.comments(emailToSend)
        if(info){
            res.render('contact', { message: 'Gracias por enviar su consulta!' })
            console.log(info)
        }else{
            console.log(error);
            res.render(error);
            res.render('contact', {message: 'error en las credenciales'})
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}
const getContact = async(req, res, next) => {
    try {
        res.render('contact', { title: '¡Hablemos!', texto: 'Hagamos de tu evento una historia única. '})
 
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

module.exports = {
    getContact,
    sendComment
}