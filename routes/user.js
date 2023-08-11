const { Router } = require("express");
const { usersPost } = require("../controllers/user");
const { check } = require("express-validator");
const Role = require('../models/role');

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get('/', (req, res) => {

	const query = req.query;

	// res.send('Hola mundo');
	res.json({
		// ok: true,
		msg: 'get API',
		query
	})
});

router.put('/:id', (req, res) => {

	const id = req.params.id;

	res.json({
		msg: 'put API',
		id
	})
});

router.post('/', [
	check('name', 'El nombre es obligatorio').not().isEmpty(), //no tiene que estar vacío
	check('password', 'El password debe de ser más de 6 letras').isLength({min: 6}),
	check('email', 'El email no es válido').isEmail(),
	// check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
	check('role').custom(async (role = '') => {
		const existRole = await Role.findOne({ role });

		if (!existRole) {
			throw new Error('El rol no está registrado en la BD')
		}

	}),
	validarCampos
] ,usersPost);

router.delete('/', (req, res) => {
	res.json({
		msg: 'delete'
	})
});

module.exports = router;