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

// login / session handlers
backend.post("/login", (req, res) => {
	if (req.body.user === "admin" && req.body.pass === "1"){
		const user = { id:1, name:"Admin" };
		req.session.user = user;
		res.send(user);
	} else {
		res.send(null);
	}
});
backend.post("/login/status", (req, res) => {
	res.send(req.session.user || null);
});
backend.post("/logout", (req, res) => {
	delete req.session.user;
	res.send({});
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));