const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.getLogs);
messageRouter.get("/new", messageController.createLogGet);
messageRouter.post("/new", messageController.createLogPost);

module.exports = messageRouter;