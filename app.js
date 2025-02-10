const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// ADD THIS
var cors = require("cors");
app.use(cors());
require("dotenv/config");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors());
// routes

const skincareRoutes = require("./routes/skincare");
const bookRoutes = require("./routes/book");
const locationRoutes = require("./routes/location");

app.use("/skincare", skincareRoutes);
app.use("/book", bookRoutes);
app.use("/location", locationRoutes);
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => {
  console.log("database is connected");
});

app.listen(process.env.PORT, () => {
  console.log(`server pada http://localhost:${process.env.PORT}`);
});
