const fs = require('fs');
const path = require('path');

class MenuModel {
    constructor() {
        this.filePath = path.join(__dirname, '../data/cardapio.json');
    }

    // Lê o cardápio do arquivo JSON
    async getMenu() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                try {
                    const produtos = JSON.parse(data);
                    resolve(produtos);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    }
}

module.exports = MenuModel;
