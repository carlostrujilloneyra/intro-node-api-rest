
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const usersGet = (req, res) => {

	const query = req.query;

	// res.send('Hola mundo');
	res.json({
		// ok: true,
		msg: 'get API',
		query
	})
}

const usersPost = async (req, res) => {

	// Esos 4 campos son los que me interesa realmente grabar, son obligatorios
	const {name, email, password, role} = req.body;
	
	// Creación de la instancia
	const user = new User({
		name,
		email,
		password,
		role
	});

	// Verificar si el correo existe
	const existEmail = await User.findOne({ email });

	if (existEmail) {
		return res.status(400).json({
			msg: 'El correo ya está registrado'
		})
	}

	// Encriptar la contraseña
	const salt = bcryptjs.genSaltSync();
	user.password = bcryptjs.hashSync(password, salt);

	// Guardar en BD

	await user.save();

	res.json({
		// msg: 'post API - usersPost',
		user
	})

}

module.exports = {
	usersPost
}