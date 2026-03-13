const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    time: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    time: new Date()
  }
];

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Post" }
]

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", links: links, messages: messages })
});

indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.text, user: req.body.user, time: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;