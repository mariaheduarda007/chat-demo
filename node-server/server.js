import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`${socket.id} entrou em ${room}`);
  });

  socket.on("leave_room", (room) => {
    socket.leave(room);
    console.log(`${socket.id} saiu de ${room}`);
  });

  socket.on("chat_message", (payload) => {
    io.to(payload.room).emit("chat_message", payload);
  });

  socket.on("disconnect", () => console.log("Desconectado:", socket.id));
});

server.listen(3001, () => console.log("Servidor Socket.IO em http://localhost:3001"));
