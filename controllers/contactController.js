const ContactMessageModel = require('../models/ContactMessageModel.js');

const contactMessageModel = new ContactMessageModel();

// Controlador para exibir o formulário de contato
exports.getContactForm = (req, res) => {
    res.render('faleconosco');
};

// Controlador para processar o envio do formulário de contato
exports.postContactMessage = async (req, res) => {
    const formData = req.body;

    try {
        await contactMessageModel.addMessage(formData);
        console.log('Mensagem salva com sucesso!');
        res.render("mensagem", {
            successo: 'Sua mensagem foi enviada com sucesso. Obrigado por entrar em contato conosco. Responderemos o mais breve possível.'
        });
    } catch (error) {
        console.error('Erro ao salvar mensagem:', error.message);
        res.render("mensagem", {
            erro: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
        });
    }
};
