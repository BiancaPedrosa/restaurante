const MenuModel = require('../models/MenuModel');

const menuModel = new MenuModel();

// Controlador para exibir o cardápio
exports.getMenu = async (req, res) => {
    try {
        const produtos = await menuModel.getMenu();
        res.render('cardapio', {
            produtos: produtos
        });
    } catch (error) {
        console.error("Erro ao ler produtos do cardápio:", error);
        res.status(500).send("Erro ao ler produtos do cardápio.");
    }
};
