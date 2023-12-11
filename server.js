var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2410;
app.listen(port, () => console.log("Listening on port:", port));

let { movies, theaters, users } = require("./data.js");

app.get("/movies", function (req, res) {
  res.send(movies);
});

app.get("/movies/:name", function (req, res) {
  res.send(theaters);
});
app.post("/login", function (req, res) {
  let body = req.body;
  let index = users.findIndex((a) => a.email === body.email);
  index >= 0
    ? res.send(users[index])
    : res.status(400).send("Please check Email");
});

app.post("/buyTickets", function (req, res) {
  let body = req.body;
  let {
    moviename = "",
    movieHall = "",
    tickets = [],
    time = "",
    email = "",
  } = body;

  let index = users.findIndex((a) => a.email === email);
  users[index].purchases.unshift(body);

  let theaterIndex = theaters.findIndex((a) => a.name === movieHall);
  let movieIndex = theaters[theaterIndex].movies.findIndex(
    (a) => a.name === moviename
  );
  tickets.map((a) =>
    theaters[theaterIndex].movies[movieIndex].seatBooked[time].push(a)
  );
  res.send("Done!!!");
});

app.post("/getTransactions", function (req, res) {
  let body = req.body;
  let index = users.findIndex((a) => a.email === body.email);

  res.send(users[index].purchases);
});
app.post("/getUserDetails", function (req, res) {
  let body = req.body;
  let index = users.findIndex((a) => a.email === body.email);

  res.send(users[index]);
});
app.put("/putUserDetails", function (req, res) {
  let body = req.body;
  let index = users.findIndex((a) => a.email === body.email);
  users[index] = body;
  res.send("Done");
});
