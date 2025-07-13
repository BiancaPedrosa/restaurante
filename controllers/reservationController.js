const ReservationModel = require('../models/reservationModel');

const reservationModel = new ReservationModel();

// Controlador para exibir o formulário de reserva
exports.getReservationForm = (req, res) => {
    res.render('reserva');
};

// Controlador para processar o envio do formulário de reserva
exports.postReservation = async (req, res) => {
    const formData = req.body;

    try {
        await reservationModel.addReservation(formData);
        console.log('Reserva salva com sucesso!');
        res.render("mensagem", {
            successo: 'Sua reserva foi enviada com sucesso. Obrigado por entrar em contato conosco. Aguardamos ansiosos para recebê-lo em nosso restaurante.'
        });
    } catch (error) {
        console.error('Erro ao salvar reserva:', error.message);
        res.render("mensagem", {
            erro: 'Ocorreu um erro ao enviar sua reserva. Por favor, tente novamente mais tarde.'
        });
    }
};
