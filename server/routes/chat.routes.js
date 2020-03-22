const ChatController = require("../controllers/chat.controller");

module.exports = app => {
    app.get("/api/chat", ChatController.User);
}