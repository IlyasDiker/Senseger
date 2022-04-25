const { PrismaClient } = require('@prisma/client')
const express = require('express');
const cors = require('cors')
const http = require('http');
const bodyParser = require('body-parser')

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
	res.send('<h1>Senseger</h1>');
});

app.post('/auth/register', async (req, res) => {
	if (req.body.email && req.body.password) {
		try {
			let x = await prisma.user.create({
				data: {
					email: req.body.email,
					password: req.body.password,
					discordauth: req.body.discordauth || null,
					avatar: req.body.avatar || null,
				}
			})
			if (x) {
				res.send({ data: x });
			} else {
				res.send({ error: "Error Occured" });
			}

		} catch (error) {

		}
	}
});

app.post('/auth/login', async (req, res) => {
	if (req.body.email && req.body.password) {
		try {
			let x = await prisma.user.findUnique({
				where: {
					email: req.body.email,
				}
			})
			if(x){
				console.log(`[INFO] : [AUTH] User ${x.email} LoggedIn`);
				if (x.password == req.body.password) {
					res.send({ data: x });
				} else {
					res.send({ error: "Error Occured" });
				}
			} else {
				res.send({ error: "No User Found" });
			}

		} catch (error) {

		}
	}
});





server.listen(3000, () => {
	console.log('listening on PORT 3000');
});

io.on('connection', (socket) => {
	console.log('a user connected');
});