const express = require("express");

//express app
const app = express();

const port = 5000;
const flash=require('connect-flash');
app.use(flash());
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sonaligoel260:uEXTSqSRyeY9VP21@cluster0.4fzjeon.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected"));
//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());
//uEXTSqSRyeY9VP21
//express layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

//routes
app.get("/", (req, res) => {
    //res.send("Home Page")
    res.render("index");
  });
  // listen to the port on 5000
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
  
  // 404 status
  app.use((req, res) => {
    res.status(404).send("<h1>Error 404 :Page not found</h1>");
  });