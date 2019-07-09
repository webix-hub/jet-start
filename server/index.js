const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: "replace this string... k12jh40918e4019u3",
  resave: false,
  saveUninitialized:true,
  cookie: { maxAge: 60*60*1000 }
}));

const backend = express.Router();
app.use("/server", backend);

// dummy data provider
backend.get("/data", (req, res) => {
	res.send([
		{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
		{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
		{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3},
		{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4},
		{ id:5, title:"My Fair Lady", year:1964, votes:533848, rating:8.9, rank:5},
		{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6}
	]);
});

var http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', function(socket) {
   console.log('A user connected');

	const ping = setInterval(function() {
   		const d = new Date();
   		const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
		socket.emit('dashinfo', { time });
	}, 1000);

	socket.on('disconnect', function () {
   		clearInterval(ping);
	});
});

http.listen(3000, () => console.log("Example app listening on port 3000!"));