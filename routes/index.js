const router = require("express").Router();
const Todo = require("../models/todo");

router.get("/todo", async(req, res) => {
    const allTodo = await Todo.find();

    res.render("index", { todo: allTodo }); //index.ejs
});

router.get("/login", async(req, res) => {
    res.render("partials/login");
});

router.get("/", async(req, res) => {
    res.render("partials/register");
});

module.exports = router;