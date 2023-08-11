
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	name: {
		type: String,
		required: [true, 'El nombre es obligatorio']
	},
	email: {
		type: String,
		required: [true, 'El correo es obligatorio'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'La contraseña es obligatoria']
	},
	img: {
		type: String,
	},
	role: {
		type: String,
		required: true,
		enum: ['ADMIN_ROLE', 'USER_ROLE']
	},
	state: {
		type: Boolean,
		default: true
	},
	google: {
		type: Boolean,
		default: false
	}
});

// Mongoose pondrá como nombre "users" a la colección, añade la "s"
module.exports = model('User', UserSchema);