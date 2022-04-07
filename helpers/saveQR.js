const qrcode = require('qrcode');
const uploadQR = require('./uploadQR');
const fs = require("fs");


const generarQR = async (ref) => {

    if (ref != "error") {
        try {
            await qrcode.toFile(`./temp/${ref}.jpg`, ref, { margin: 1 });
            const file = `${ref}.jpg`;
            const result = await uploadQR(file);
            try {
                fs.unlinkSync(`./temp/${file}`);
            } catch {
                console.log(`error al eliminar archivo temporal`);
            }
            return result;
        } catch {
            return { "error": "error al crear qr" };
        }
    } else {
        return { "error": "referencia no especificada" };
    }

}

module.exports = generarQR;