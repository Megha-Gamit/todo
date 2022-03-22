const router = require("express").Router();
const todo = require("../models/todo");
const Todo = require("../models/todo");

//routes

router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    newTodo
        .save()
        .then(() => {
            console.log("Successfully Added Todo");
            res.redirect("/todo");
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log("Deleted Todo Successfull");
            res.redirect("/todo");
        })
        .catch((err) => {
            console.log(err);
        });
});





module.exports = router;