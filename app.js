const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const markers = {};

io.on("connection", function (socket) {
  socket.emit("all-markers", markers);

  socket.on("send-location", function (data) {
    markers[socket.id] = { id: socket.id, ...data }; 
    io.emit("recieve-location", {
      id: socket.id,
      ...data,
    });
  });

  socket.on("disconnect", function () {
    delete markers[socket.id];
    io.emit("user-disconnected", socket.id);
  });
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000);
