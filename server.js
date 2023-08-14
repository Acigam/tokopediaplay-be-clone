require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const cors = require("cors");

const path = require("path");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log(`Connected to database ${MONGO_URI}`));

const routes = require("./routes/routes");

const app = express();

const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:3000",
  credentials: true,
  OptionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api", routes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.use(express.static("public"));

const server = require("http").Server(app);
const io = socketio(server, {
  cors: {
    origin: process.env.ORIGIN || "http://localhost:3000",
  },
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on("join room", (videoID) => {
    console.log(`Socket ${socket.id} joined room ${videoID}`);
    socket.join(videoID);
  });

  socket.on("send comment", ({ videoid, username, comment, timestamp }) => {
    console.log(`Socket ${socket.id} username: ${username} sent comment ${comment} to ${videoid}`);
    const payload = { username, comment, createdAt: timestamp };
    io.in(videoid).emit("receive comment", payload);
  });

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});
