const express = require("express");
const app = express();
//pass routes
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter')

//public asset path
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routers
app.use("/new", newRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 8000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`listening on port ${PORT}`);
});