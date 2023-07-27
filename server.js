require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log(`Connected to database ${MONGO_URI}`));

const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
