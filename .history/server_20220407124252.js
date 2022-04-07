const express = require("express");

//importing the routes
const userRoute = require("./routes/usersRoute");

// Create a new express app instance
const app = express();

//middleware
app.use(express.json());

//routes
app.use(userRoute);

//home route
app.get("/", (req, res) => {
  res.status(200).send("<h1>WELCOME TO THE USERS' DATABASE</h1>");
});

//not found route
app.get("/*", (req, res) => {
  res.status(200).send("<h1>PAGE NOT FOUND!</h1>");
});

//listener
app.listen(4000, () => {
  console.log("SERVER IS UP!");
});
