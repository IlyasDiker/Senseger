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
				delete x.password;
				res.send({ data: x });
			} else {
				res.send({ error: "Error Occured" });
			}

		} catch (error) {
			res.send({ error: error.message });
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
					delete x.password;
					res.send({ data: x });
				} else {
					res.send({ error: "Wrong Credentials" });
				}
			} else {
				res.send({ error: "No User Found" });
			}

		} catch (error) {
			res.send({ error: error.message });
		}
	}
});

app.post('/addfriend', async (req, res) =>{
	if(req.body.parent && req.body.child) {
		try {
			let x = await prisma.userOnUser.create({
				data:{
					childId : req.body.child,
					parentId : req.body.parent,
					realtionType : req.body.realtionType || 0,
				}
			})
			res.send({ data: x });
		} catch (error) {
			res.send({ error: error.message });
		}
	} else {
		res.send({ error: "Missing parameters" });
	}
})

app.post('/acceptfriend', async (req, res) =>{
	if(req.body.parent && req.body.child) {
		try {
			let x = await prisma.userOnUser.updateMany({
				where:{
					childId : req.body.child,
					parentId : req.body.parent,
				},
				data: {
					realtionType : req.body.realtionType || 1,
				}
			})
			let y = await prisma.userOnUser.create({
				data:{
					childId : req.body.parent,
					parentId : req.body.child,
					realtionType : req.body.realtionType || 1,
				}
			})
			res.send({ data: x , data2: y});
		} catch (error) {
			res.send({ error: error.message });
		}
	} else {
		res.send({ error: "Missing parameters" });
	}
})






server.listen(3000, () => {
	console.log('listening on PORT 3000');
});

io.on('connection', (socket) => {
	console.log('a user connected');
});