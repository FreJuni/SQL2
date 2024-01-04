const express = require("express");
const postRouter = require("./Routers/Rpost");
const adminRouter = require("./Routers/Radmin");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");
app.set("views", "Pages");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(postRouter);

app.use("/admin", adminRouter);

app.listen(8080);
