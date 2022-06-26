const express = require("express");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.use(expressLayouts);
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index", {
        layout: "layouts/main-layout",
        title: "OPMAZ",
    });
});
app.get("/beritapasar", (req, res) => {
    res.render("pages/beritapasar", {
        layout: "layouts/main-layout",
        title: "OPMAZ",
    });
});

app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`)
);
