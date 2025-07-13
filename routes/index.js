const express = require('express');
const router = express.Router();

// Importa os controladores
const reservationController = require('../controllers/reservationController');
const contactController = require('../controllers/contactController');
const menuController = require('../controllers/menuController');

// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('home');
});

// Rotas de Reserva
router.get('/reserva', reservationController.getReservationForm);
router.post('/reserva', reservationController.postReservation);

// Rotas de Fale Conosco
router.get('/faleconosco', contactController.getContactForm);
router.post('/faleconosco', contactController.postContactMessage);

// Rotas de Cardápio
router.get('/cardapio', menuController.getMenu);

module.exports = router;
