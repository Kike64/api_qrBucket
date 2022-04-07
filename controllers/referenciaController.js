var generarQR = require('../helpers/saveQR')

const getURL = async (req, res) => {

    const result = await generarQR(req.body.Referencia || "error");
    res.json(result);

};

module.exports = { getURL };