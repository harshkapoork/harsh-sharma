const express = require("express");
const app = express();
const port = process.env.PORT ||1001
// const port =  1001;
const path=require("path")
app.listen(port, () => {
    console.log("server is created at",port)
})


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"assets")))

app.get("/", (req, res) => {
        console.log("/")
        res.render("home.ejs");
})
app.get("/home", (req, res) => {
    console.log("/")
    res.render("home.ejs");
})

app.get("/about", (req, res) => {
    console.log("/about")
    res.render("about.ejs");
})
app.get("/contact", (req, res) => {
    console.log("/contact")
    res.render("contact.ejs");
})
app.get("/plans", (req, res) => {
    console.log("/plans")
    res.render("plans.ejs");
})
app.get("*", (req, res) => {
    console.log("/")
    res.send("404 Page not found");
})