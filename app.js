require("dotenv").config();
var express = require("express"),
    { exec } = require("child_process"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("app");
});

app.listen(process.env.PORT, process.env.IP, () => {
    const serverURL = `http://${process.env.IP}:${process.env.PORT}`;
    console.log(`Server started at ${serverURL}`);
    exec(`start ${serverURL}`); // This will open the browser
});
