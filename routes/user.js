const userRouter = require("express").Router();

const User = require("../models/user");

//routes

userRouter.post("/add/user", (req, res) => {
    // const { user } = req.body;
    // const newUser = new User({ user });
    const user = new User(req.body);

    user.save()
        .then(() => {
            console.log("Successfully Added User");
            res.redirect("/login");
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});


// userRouter.post('/add/user', async(req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//         res.redirect("/login");
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

userRouter.post("/login/user", async(req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;

        const useremail = await User.findOne({ email: email });
        //res.send(useremail.password);
        // console.log(useremail);
        if (useremail.password === password) {
            res.redirect("/todo");
        } else {
            res.send("password are not matching")

        }

    } catch (error) {

        res.status(400).send("invalid email");


    }

});



module.exports = userRouter;