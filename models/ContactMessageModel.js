const fs = require('fs');
const path = require('path');

class ContactMessageModel {
    constructor() {
        this.filePath = path.join(__dirname, '../data/mensagens.json');
    }

    // Lê todas as mensagens do arquivo JSON
    async getAllMessages() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                 if (err) {
                    // Se o arquivo não existe, retorna um array vazio
                    if (err.code === 'ENOENT') {
                        return resolve([]);
                    }
                    return reject(err);
                }
                try {
                    const mensagens = JSON.parse(data);
                    resolve(mensagens);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    }

    // Adiciona uma nova mensagem ao arquivo JSON
    async addMessage(newMessage) {
        return new Promise(async (resolve, reject) => {
            try {
                const mensagens = await this.getAllMessages();
                mensagens.push(newMessage);
                fs.writeFile(this.filePath, JSON.stringify(mensagens, null, 2), 'utf8', (err) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}
module.exports = ContactMessageModel;