const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json(errors);
	}

	// Si no hay errores, sigue con el siguiente middleware sino hay sigue con el controlador
	next();

}

module.exports = {
	validarCampos
}