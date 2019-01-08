const express = require('express');
const app = express();

const cources = [ 
	{ id: 1, name: 'Java Script'},
	{ id: 2, name: 'Node js'},
	{ id: 3, name: 'Express JS'}
]
app.get('/', (req, res) => {
	res.send('hello express js');
});

app.get('/api/cources', (req, res) => {
	res.send(JSON.stringify(cources));
});

app.get('/api/cources/:id', (req, res) => {
	const cource = cources.find(c => c.id == parseInt(req.params.id));
	if (!cource) res.status(404).send('The cource with given id is not found!');
	res.send(cource);
});

app.listen(3000, () => console.log('Listening on port 3000...'));