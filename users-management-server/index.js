const express = require("express");
const cors = require("cors"); //important for data show
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors()); // call the cors its also important for data show
app.use(express.json()); //must use it to handle send data clinet to server

const users = [
  { id: 1, name: "atamiah", email: "atamiah@gmail.com" },
  { id: 2, name: "mainer", email: "mainer@gmail.com" },
  { id: 3, name: "akbor", email: "akbor@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
