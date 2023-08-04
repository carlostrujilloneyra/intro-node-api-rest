
const { Router } = require("express");

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

router.post('/', (req, res) => {

	const {name, age} = req.body;

	res.status(201).json({
		msg: 'post API',
		name,
		age
	})
});

router.delete('/', (req, res) => {
	res.json({
		msg: 'delete'
	})
});

module.exports = router;