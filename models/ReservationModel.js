const fs = require('fs');
const path = require('path');

class ReservationModel {
    constructor() {
        this.filePath = path.join(__dirname, '../data/reservas.json');
    }

    // Lê todas as reservas do arquivo JSON
    async getAllReservations() {
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
                    const reservas = JSON.parse(data);
                    resolve(reservas);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    }

    // Adiciona uma nova reserva ao arquivo JSON
    async addReservation(newReservation) {
        return new Promise(async (resolve, reject) => {
            try {
                const reservas = await this.getAllReservations();
                reservas.push(newReservation);
                fs.writeFile(this.filePath, JSON.stringify(reservas, null, 2), 'utf8', (err) => {
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

module.exports = ReservationModel;