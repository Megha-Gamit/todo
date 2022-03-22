const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
    .connect(
        "mongodb+srv://Megha:megha*12345@cluster0.vi6gd.mongodb.net/todoDB?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Database connected");
    })
    .catch(() => {
        console.log("Database not connected");
    });

app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json())

app.use(require("./routes/index"));
app.use(require("./routes/todo"));
app.use(require("./routes/user"));

app.listen(4000, () => {
    console.log("Server started Listing on port: 4000");
});